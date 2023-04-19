package com.SOF.backend.mock;


import com.SOF.backend.question.QuestionController;
import com.SOF.backend.question.QuestionDto;
import com.SOF.backend.question.QuestionService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.test.web.servlet.MockMvc;
import com.google.gson.Gson;
import org.mockito.Mockito;

import java.time.LocalDateTime;


import static org.mockito.BDDMockito.given;

@WebMvcTest(QuestionController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class QuestionControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private QuestionService questionService;

    @Autowired
    private Gson gson;



    @Test
    public void getMemberTest() throws  Exception{

        QuestionDto.Response response = new QuestionDto.Response(1L,
                 "제목",
                "내용",
                null,
                LocalDateTime.now(),
                LocalDateTime.now(),
                1);

        given(questionService.findQuestion(Mockito.anyLong())).willReturn(new QuestionDto.Response());

        String questionId = String.valueOf(response.getQuestionId());



    }
}
