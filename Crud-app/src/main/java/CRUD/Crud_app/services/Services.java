package CRUD.Crud_app.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.stereotype.Service;

import CRUD.Crud_app.entities.Student;
import CRUD.Crud_app.repositories.repository;
import jakarta.transaction.Transactional;

@Service
public class Services {
    @Autowired
    private repository repo;
    public String insertStudent(Student student){
        repo.save(student);
        return "student added";

    }

    public String insertStudents(List<Student> student){
        repo.saveAll(student);
        return "students added";
    }
   
    public List<Student> displayStudents(){
        return repo.findAll();
    }

    public Student displayStudentById(int id){
        return repo.findById(id);
    }
    public Student displayStudentByName(String name){
        return repo.findByName(name);
    }
    public Student deleteById(int id){
        Student student=repo.findById(id);
        repo.deleteById(id);
        // repo.deleteAll();
        return student;
    }
    public List<Student> deleteByRange(int start,int end){
        List<Student> student=new ArrayList<>();
        for(int i=start;i<=end;i++){
            student.add(repo.findById(i));
            repo.deleteById(i);
        }
        return student;
    }
    public String updateById(int id,Student student){
        Student oldStudent=repo.findById(id);
        if(oldStudent==null){
            return "student not found";
        }
        oldStudent.setName(student.getName());
        oldStudent.setUsn(student.getUsn());
        oldStudent.setBranch(student.getBranch());
        oldStudent.setSem(student.getSem());
        oldStudent.setBatch(student.getBatch());
        repo.save(oldStudent);
        return "values updated";
    }
    // UPDATE BY USN

    public String updateStudentByUsn(String usn,Student student){
        Student oldStudent=repo.findByUsn(usn);
        if(oldStudent==null){
            return "student not found";
        }
        oldStudent.setName(student.getName());
        oldStudent.setBranch(student.getBranch());
        oldStudent.setSem(student.getSem());
        oldStudent.setBatch(student.getBatch());
        repo.save(oldStudent);
        return "values updated";
    }


    public Student displayStudentByUsn(String usn) {
       return repo.findByUsn(usn);
    }

    @Transactional
    public String deleteByUsn(String usn) {
        repo.deleteByUsn(usn);
        return "Deleted !!";
    }
}
