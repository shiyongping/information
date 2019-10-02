package com.person.core;

import com.person.core.annotation.annotationtest;

import java.lang.reflect.Field;

/**
 * @Author: shiyongping
 * @Date: 2019/8/27 16:23
 */
public class simpleTest {

    public void getInformatuon(Class<?> clazz){
        Field[] fields = clazz.getDeclaredFields();
        annotationtest annotationtest1 = clazz.getAnnotation(annotationtest.class);
        for (Field field :fields){
             if (field.getName().equals(annotationtest1.name())){
                 System.out.println("+++++++++++++value"+annotationtest1.name());

             }
             if (field.getName().equals(annotationtest1.name())){
                 System.out.println("+++++++++++++value"+annotationtest1.age());
             }
        }
    }
}
