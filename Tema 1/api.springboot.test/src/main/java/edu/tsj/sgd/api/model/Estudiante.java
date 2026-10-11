package edu.tsj.sgd.api.model;

public class Estudiante {
private Long id;
private String nombre;
private String email;

    public Estudiante(String email, Long id, String nombre) {
        this.email = email;
        this.id = id;
        this.nombre = nombre;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


}
