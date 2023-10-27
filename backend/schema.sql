-- Storing different types of media (books, movies, music, events) in a separate table. This table is essential for categorizing recommendations.

DROP TABLE IF EXISTS media CASCADE;

CREATE TABLE media(
    id serial PRIMARY KEY,
    medium_type varchar(200) NOT null);

INSERT INTO media(medium_type)
    VALUES 
    ('Book'),
    ('Movie / Film'),
    ('Music'),
    ('Event');

SELECT  * FROM media;

----------------------------------------------

-- Having a table for moods allows for a flexible way to associate moods with recommendations. Users can select from a predefined list, and we can expand this list as needed.

DROP TABLE IF EXISTS moods CASCADE;

CREATE TABLE moods(
    id serial PRIMARY KEY,
    mood_type varchar(200) NOT null);

INSERT INTO moods(mood_type)
    VALUES 
    ('Happy / Joyful'),
    ('Sad'),
    ('Whimsical'),
    ('Adventure'),
    ('Romantic'),
    ('Fun'),
    ('Inspirational'),
    ('Personal growth'),
    ('Scary'),
   	('Epic Fantasy');

SELECT  * FROM moods;

---------------------------------------------------

-- Storing people who make recommendations with their full names is important for tracking who recommended what.

DROP TABLE IF EXISTS people CASCADE;

CREATE TABLE people(
    id serial PRIMARY KEY,
    person_full_name varchar(200) NOT null);

INSERT INTO people(person_full_name)
    VALUES 
    ('Cathy Rose'),
    ('Lorentz Tulip'),
    ('Daniel Lily'),
    ('Shadi Sunflower'),
    ('Junita Bluebells'),
    ('Alexey Orchid'),
   	('Alisha Jasmine'),
   	('Yulia Iris');

SELECT * FROM people;

---------------------------------------------------

-- The entries table serves as a central point for recommendations. It references the medium, which is a good way to tie recommendations to specific media types.

DROP TABLE IF EXISTS entries CASCADE;

CREATE TABLE entries(
    id serial PRIMARY KEY,
    medium_id integer NOT null,
    title varchar(200) NOT null,
   	FOREIGN KEY (medium_id) REFERENCES media(id));

INSERT INTO entries(medium_id, title)
    VALUES 
    (2, 'Frozen'),
    (4, 'Halloween Party at Cath''s'),
    (1, 'Atomic Habits'),
    (3, 'Kylie''s Greatest Hits'),
    (2, 'Inception'),
    (1, 'Burglar Bill'),
    (4, 'Picasso at Tate Modern'),
   	(2, 'Forrest Gump'),
   	(2, 'Interstellar'),
   	(1, 'Lord Of The Rings'),
   	(2, 'Lord Of The Rings');

SELECT  * FROM entries;

---------------------------------------------------

-- The many-to-many relationship between recommendations and moods is well-handled in the table below.

DROP TABLE IF EXISTS moods_entries CASCADE;

CREATE TABLE moods_entries (
    id serial PRIMARY KEY,
    mood_id integer NOT null,
    entry_id integer NOT null,
    FOREIGN KEY (mood_id) REFERENCES moods(id),
   	FOREIGN KEY (entry_id) REFERENCES entries(id));

INSERT INTO moods_entries (mood_id, entry_id)
    VALUES (3, 1),
		    (1, 1),
		    (9, 2),
		    (4, 2),
		    (7, 3),
		    (1, 4),
		    (5, 4),
		    (4, 5),
		    (5, 5),
		    (7, 5),
		    (2, 5),
		    (4, 6),
		    (6, 6),
		    (7, 7),
		    (1, 8),
		    (3, 8),
		    (5, 8),
		    (7, 8),
		    (8, 8),
		    (2, 9),
		    (4, 9),
		    (7, 9),
		    (3, 10),
		    (5, 10),
		    (7, 10),
            (10, 10),
		    (3, 11),
		    (5, 11),
		    (7, 11),
            (10, 11);

SELECT  * FROM moods_entries;

------------------------------------------------

-- This table establishes the association between recommendations and the people who make them. This allows us to track recommendations by specific individuals.

DROP TABLE IF EXISTS people_entries CASCADE;

CREATE TABLE people_entries(
    id serial PRIMARY KEY,
    person_id integer NOT null,
    entry_id integer NOT null,
    FOREIGN KEY (person_id) REFERENCES people(id),
   	FOREIGN KEY (entry_id) REFERENCES entries(id));

INSERT INTO people_entries(person_id, entry_id)
    values	(6, 1),
		    (1, 2),
		    (6, 3),
		    (1, 4),
		    (7, 5),
		    (2, 6),
		    (1, 7),
		    (8, 8),
		    (1, 9),
		   	(7, 10),
		    (7, 11),
			(3, 1);
    
SELECT  * FROM people_entries;

------------------------------------------------