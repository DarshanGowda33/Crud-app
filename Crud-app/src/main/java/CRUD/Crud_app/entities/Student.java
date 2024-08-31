package CRUD.Crud_app.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.*;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data
@AllArgsConstructor     //data displaying
@NoArgsConstructor      //event handler
public class Student {
   
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;
    private String name;
    private String usn;
    private String branch;
    private int sem;
    private int batch;
}
//client--> controller--servicse--repositories(database)(<------>)