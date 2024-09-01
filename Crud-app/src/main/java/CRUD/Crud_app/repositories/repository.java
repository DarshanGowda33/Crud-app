package CRUD.Crud_app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import CRUD.Crud_app.entities.Student;

public interface repository extends JpaRepository<Student,Integer>{
    public Student findById(int id);
    public Student findByName(String name);
    public Student findByUsn(String usn);
    public String deleteByUsn(String usn);
} 
