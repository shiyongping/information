package com.person.core.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * @Author: shiyongping
 * @Date: 2019/8/27 17:00
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface annotationtest {
    public  String name() default "shiyp";
    public int age() default 19;
}
