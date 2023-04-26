package com.SOF.backend.jwt.config;

import com.SOF.backend.jwt.auth.JwtTokenizer;
import com.SOF.backend.jwt.auth.filter.JWtVerificationFilter;
import com.SOF.backend.jwt.auth.filter.JwtAuthenticationFilter;
import com.SOF.backend.jwt.auth.handler.MemberAccessDeniedHandler;
import com.SOF.backend.jwt.auth.handler.MemberAuthenticationEntryPoint;
import com.SOF.backend.jwt.auth.handler.MemberAuthenticationFailureHandler;
import com.SOF.backend.jwt.auth.handler.MemberAuthenticationSuccessHandler;
import com.SOF.backend.jwt.auth.utils.CustomAuthorityUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;


@Configuration
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    public SecurityConfiguration(JwtTokenizer jwtTokenizer, CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity https) throws Exception {
        https
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors().configurationSource(corsConfigurationSource())
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new MemberAuthenticationEntryPoint())
                .accessDeniedHandler(new MemberAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers(HttpMethod.POST, "/signup").permitAll()
                        .antMatchers(HttpMethod.PATCH, "/user/profile/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/user/profile/edit/**").hasAnyRole("USER","ADMIN")
                        .antMatchers(HttpMethod.GET, "/user/profile/**").permitAll()
                        .antMatchers(HttpMethod.DELETE, "/user/profile/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/question/list").permitAll()
                        .antMatchers(HttpMethod.GET, "/question/**").permitAll()
                        .antMatchers(HttpMethod.POST, "/question/ask").hasAnyRole("USER", "ADMIN")
                        .antMatchers(HttpMethod.PATCH, "/question/ask/**").hasAnyRole("USER", "ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/question/ask/**").hasAnyRole("USER", "ADMIN")
                        .anyRequest().permitAll()
                );
        return https.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource(){
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOriginPatterns(Arrays.asList("*"));
        configuration.setAllowedOrigins(Arrays.asList("https://d5c1-39-119-48-216.ngrok-free.app", "http://localhost:3000"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PATCH", "DELETE"));

       UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**",configuration);
        return source;
   }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/login/connection"); // 로그인 시 URL
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());

            JWtVerificationFilter jWtVerificationFilter = new JWtVerificationFilter(jwtTokenizer, authorityUtils);

            builder.addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jWtVerificationFilter, JwtAuthenticationFilter.class);
        }
    }
}
