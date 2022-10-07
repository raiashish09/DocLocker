package study.jparest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
//@ComponentScan("study.jparest.controller")
public class JpaHibernateExApplication {

	public static void main(String[] args) {
		SpringApplication.run(JpaHibernateExApplication.class, args);
		
	}

}
