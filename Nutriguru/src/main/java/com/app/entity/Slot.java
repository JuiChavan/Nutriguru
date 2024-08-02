package com.app.entity;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public enum Slot {
    MORNING(1, "9:00 AM"),
    AFTERNOON(2, "2:00 PM"),
    EVENING(3, "5:00 PM"),
    NIGHT(4, "7:00 PM");

    private final int number;
    private final String description;

    // Constructor to initialize the values
    Slot(int number, String description) {
        this.number = number;
        this.description = description;
    }
}
