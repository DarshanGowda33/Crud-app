package CRUD.Crud_app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import CRUD.Crud_app.entities.Student;
import CRUD.Crud_app.services.Services;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@CrossOrigin("http://127.0.0.1:5500")
public class Controller {
    @Autowired
    private Services service;
    // Services service= new Services();
    
    @PostMapping("/addStudent")
    public String insertStudent(@RequestBody Student student){
        return  service.insertStudent(student);
    }
    @PostMapping("/addStudents")
    public String insertStudents(@RequestBody List<Student> student)
    {
        return service.insertStudents(student);
    }
    @GetMapping("/displayStudents")
    public List<Student> displayStudents(){
        return service.displayStudents();
    }
    @GetMapping("/displayStudent/{id}")
    public Student displayStudent(@PathVariable int id){
        return service.displayStudentById(id) ;
    }
    @GetMapping("/getStudent/{name}")
    public Student displayStudentByName(@PathVariable String name){
        return service.displayStudentByName(name);
    }
    @DeleteMapping("/deleteById")
    public Student deleteById(@RequestParam int id){
        return service.deleteById(id);
        //return service.deleteAll();
    }
    @DeleteMapping("/deleteByRange")
    public List<Student> deleteByRange(@RequestParam int start,@RequestParam int end){
        return service.deleteByRange(start,end);
    }
    @PutMapping("/updateById")
    public String updateById(@RequestParam int id,@RequestBody Student student){
        return service.updateById(id,student);
    }
}


//request-->post  && responce-->get