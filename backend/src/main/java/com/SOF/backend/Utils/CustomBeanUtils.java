package com.SOF.backend.Utils;


import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;
import org.springframework.stereotype.Component;

import java.lang.reflect.Field;
import java.util.Collection;

@Component
public class CustomBeanUtils<T> {


    public T copyNonNullProperties(T source, T destination){      // source = update 할 객체 , destination = 업데이트 전 DB의 기존 객체
        if (source == null || destination == null || source.getClass() != destination.getClass()) {
            return null;
        }

        final BeanWrapper src = new BeanWrapperImpl(source);
        final BeanWrapper dest = new BeanWrapperImpl(destination);

        for (final Field property : source.getClass().getDeclaredFields()) {
            Object sourceProperty = src.getPropertyValue(property.getName());
            if (sourceProperty != null && !(sourceProperty instanceof Collection<?>)) {
                dest.setPropertyValue(property.getName(), sourceProperty);
            }
        }

        return destination;

    }
// 기존의 객체와 비교하여  source 객체의 프로퍼티에서 null과 collection타입이 아닐 경우 destination 객체의 해당 프로퍼티로 내용물을 복사하여 붙혀넣음
}
