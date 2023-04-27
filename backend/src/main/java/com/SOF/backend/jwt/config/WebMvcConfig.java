package com.SOF.backend.jwt.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class WebMvcConfig implements WebMvcConfigurer {


    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry
                .addMapping("/**")
                .allowedOrigins("http://localhost:3000", "https://d5c1-39-119-48-216.ngrok-free.app")
                .allowedMethods(HttpMethod.POST.name(), HttpMethod.GET.name(),HttpMethod.DELETE.name(),HttpMethod.PATCH.name(),HttpMethod.OPTIONS.name())
                .allowedHeaders("*")
                .exposedHeaders("*")
                .allowCredentials(true);
    }
}
