create table houses(
    id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer,
    
);

insert into houses (name, address, city, state, zip, img, mortgage, rent)
values 
('Val House', '123 S 321 N', 'Lehi', 'UT', 84003, 'https://www.trzcacak.rs/myfile/detail/115-1153833_small-red-house-icon-svg-clip-arts-582.png', 300300.3, 1500.5)
('David House', '654 S 987 N', 'Orem', 'UT', 84113, 'https://imgs.clipartwiki.com/clipimg/small/0-547_blue-house-png-images-299-x-282-px.png', 500800.3, 3200.5);
