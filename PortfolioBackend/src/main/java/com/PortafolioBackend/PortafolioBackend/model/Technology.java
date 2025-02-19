package com.PortafolioBackend.PortafolioBackend.model;

public class Technology {
    private String name;
    private String info;

    // Constructor vacío (necesario para la deserialización)
    public Technology() {}

    // Constructor con parámetros
    public Technology(String name, String info) {
        this.name = name;
        this.info = info;
    }

    // Getters y Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    @Override
    public String toString() {
        return "Technology{" +
                "name='" + name + '\'' +
                ", info='" + info + '\'' +
                '}';
    }
}
