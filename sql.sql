CREATE TABLE Tut_Alumni (
    alumni_id INTEGER PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    surname VARCHAR(50) NOT NULL,
    date_of_birth DATE,
    email VARCHAR(100) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE alumni_space_account (
    account_id SERIAL PRIMARY KEY,
    alumni_id INTEGER REFERENCES Tut_Alumni(alumni_id),
    time_recorded TIMESTAMP NOT NULL DEFAULT NOW(),
    account_status VARCHAR(20) NOT NULL
);


