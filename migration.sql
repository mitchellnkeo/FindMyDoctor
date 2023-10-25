DROP TABLE IF EXISTS patients ;
DROP TABLE IF exists healthcareProvider ;

CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    pw TEXT NOT NULL,
    insurancePlan TEXT NOT NULL,
    services TEXT NOT NULL
    -- providerid SERIAL FOREIGN KEY
);

CREATE TABLE healthcareProvider (
    id SERIAL PRIMARY KEY,
    providerName TEXT NOT NULL,
    providerLocation TEXT NOT NULL,
    insurancePlan TEXT NOT NULL,
    services TEXT NOT NULL,
    takingPatients BOOLEAN NOT NULL
    -- healthcareAdminId SERIAL FOREIGN KEY,
    -- insurancePlans SERIAL FOREIGN KEY
);


-- CREATE TABLE service (
--     id SERIAL PRIMARY KEY,
--     username TEXT NOT NULL,
--     password MONEY NOT NULL,
--     insurance_Plan TEXT NOT NULL,
--     services, TEXT NOT NULL,
--     provider_id SERIAL FOREIGN KEY
-- );

-- CREATE TABLE insurance (
--     id SERIAL PRIMARY KEY,
--     username TEXT NOT NULL,
--     password MONEY NOT NULL,
--     insurance_Plan TEXT NOT NULL,
--     services, TEXT NOT NULL,
--     provider_id SERIAL FOREIGN KEY
-- );

-- CREATE TABLE healthcareAdmin (
--     id SERIAL PRIMARY KEY,
--     username TEXT NOT NULL,
--     password MONEY NOT NULL,
--     insurance_Plan TEXT NOT NULL,
--     services, TEXT NOT NULL,
--     provider_id SERIAL FOREIGN KEY
-- );

--postgres://findmydoctor_user:wopnk09Fz0WrHx1RFDPRB1mJPkhbueja@dpg-cks6c2h0at9c73ahhad0-a.oregon-postgres.render.com/findmydoctor