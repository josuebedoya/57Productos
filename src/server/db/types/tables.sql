-- Language Table
create table
  language (
    id serial primary key,
    code varchar(50) not null unique,
    dir varchar(3) check (dir in ('ltr', 'rtl')) default 'ltr' not null,
    date_created timestamp default now () not null,
    date_updated timestamp,
    date_deleted timestamp
  );

-- Module Table
create table
  module (
    id serial primary key,
    name varchar(255) not null unique,
    date_created timestamp default now () not null,
    date_updated timestamp,
    date_deleted timestamp
  );

-- Action Table
create table
  action (
    id serial primary key,
    code varchar(100) not null unique,
    date_created timestamp default now () not null,
    date_updated timestamp,
    date_deleted timestamp
  );

-- Action Translation Table
create table
  action_trans (
    id serial primary key,
    action_id int not null,
    code_lang varchar(50) not null,
    body text,
    date_created timestamp default now () not null,
    date_updated timestamp,
    date_deleted timestamp,
    constraint fk_action_trans_action foreign key (action_id) references action (id) on update cascade on delete no action,
    constraint fk_action_trans_language foreign key (code_lang) references language (code) on update cascade on delete no action,
    constraint fk_uq_action_trans_lang unique (action_id, code_lang)
  );

-- Permissions Table
create table
  permission (
    id serial primary key,
    module_id int not null,
    action_id int not null,
    date_created timestamp default now () not null,
    date_updated timestamp,
    date_deleted timestamp,
    constraint fk_permission_module foreign key (module_id) references module (id) on update cascade on delete no action,
    constraint fk_permission_action foreign key (action_id) references action (id) on update cascade on delete no action,
    constraint fk_uq_permission_module_action unique (module_id, action_id)
  );

-- Role Table
create table
  role (
    id serial primary key,
    name varchar(255) not null unique,
    date_created timestamp default now () not null,
    date_updated timestamp,
    date_deleted timestamp
  );

-- Role Permission Table
create table
  role_permission (
    id serial primary key,
    role_id int not null,
    permission_id int not null,
    date_created timestamp default now () not null,
    date_updated timestamp,
    date_deleted timestamp,
    constraint fk_role_permission_role foreign key (role_id) references role (id) on update cascade on delete no action,
    constraint fk_role_permission_permission foreign key (permission_id) references permission (id) on update cascade on delete no action,
    constraint fk_uq_role_permission unique (role_id, permission_id)
  );

-- User table
create table
  user (
    id uuid primary key,
    name varchar(255) not null,
    last_name varchar(255),
    email varchar(255) not null unique,
    phone varchar(20) unique,
    avatar varchar(300),
    role_id int not null,
    date_created timestamp default now () not null,
    date_updated timestamp,
    date_deleted timestamp,
    constraint fk_users_auth_users foreign key (id) references auth.users (id) on update cascade on delete no action,
    constraint fk_users_role foreign key (role_id) references role (id) on update cascade on delete no action
  );

-- Menu Table
create table
  menu (
    id serial primary key,
    date_created timestamp default now () not null,
    date_updated timestamp,
    date_deleted timestamp,
    user_created uuid not null,
    user_updated uuid,
    user_deleted uuid,
    constraint fk_menu_users_created foreign key (user_created) references user (id) on update cascade on delete no action,
    constraint fk_menu_users_updated foreign key (user_updated) references user (id) on update cascade on delete set null,
    constraint fk_menu_users_deleted foreign key (user_deleted) references user (id) on update cascade on delete set null
  );

-- Menu Translation Table
create table
  menu_trans (
    id serial primary key,
    menu_id int not null,
    code_lang varchar(50) not null,
    body text,
    date_created timestamp default now () not null,
    date_updated timestamp,
    date_deleted timestamp,
    user_created uuid not null,
    user_updated uuid,
    user_deleted uuid,
    constraint fk_menu_trans_users_created foreign key (user_created) references user (id) on update cascade on delete no action,
    constraint fk_menu_trans_users_updated foreign key (user_updated) references user (id) on update cascade on delete set null,
    constraint fk_menu_trans_users_deleted foreign key (user_deleted) references user (id) on update cascade on delete set null,
    constraint fk_menu_trans_menu foreign key (menu_id) references menu (id) on update cascade on delete no action,
    constraint fk_menu_trans_language foreign key (code_lang) references language (code) on update cascade on delete no action,
    constraint fk_uq_menu_trans_lang unique (menu_id, code_lang)
  );

-- Menu Item Table
create table
  menu_item (
    id serial primary key,
    menu_id int not null,
    parent_id int,
    order_num int not null check (order_num >= 0),
    date_created timestamp default now () not null,
    date_updated timestamp,
    date_deleted timestamp,
    user_created uuid not null,
    user_updated uuid,
    user_deleted uuid,
    constraint fk_menu_item_users_created foreign key (user_created) references user (id) on update cascade on delete no action,
    constraint fk_menu_item_users_updated foreign key (user_updated) references user (id) on update cascade on delete set null,
    constraint fk_menu_item_users_deleted foreign key (user_deleted) references user (id) on update cascade on delete set null,
    constraint fk_menu_item_menu foreign key (menu_id) references menu (id) on update cascade on delete no action,
    constraint fk_uq_menu_item_menu_id unique (menu_id, id),
    constraint fk_menu_item_parent_same_menu foreign key (menu_id, parent_id) references menu_item (menu_id, id) on update cascade on delete no action,
    constraint chk_menu_item_not_self_parent check (
      parent_id is null
      or parent_id <> id
    )
  );

-- Menu Item Translation Table
create table
  menu_item_trans (
    id serial primary key,
    menu_item_id int not null,
    code_lang varchar(50) not null,
    body text,
    date_created timestamp default now () not null,
    date_updated timestamp,
    date_deleted timestamp,
    user_created uuid not null,
    user_updated uuid,
    user_deleted uuid,
    constraint fk_menu_item_trans_users_created foreign key (user_created) references user (id) on update cascade on delete no action,
    constraint fk_menu_item_trans_users_updated foreign key (user_updated) references user (id) on update cascade on delete set null,
    constraint fk_menu_item_trans_users_deleted foreign key (user_deleted) references user (id) on update cascade on delete set null,
    constraint fk_menu_item_trans_menu_item foreign key (menu_item_id) references menu_item (id) on update cascade on delete no action,
    constraint fk_menu_item_trans_language foreign key (code_lang) references language (code) on update cascade on delete no action,
    constraint fk_uq_menu_item_trans_lang unique (menu_item_id, code_lang)
  );

/*
Indexes TABLES
 */
-- Menu Item Order Indexes
create unique index idx_menu_item_order_root on menu_item (menu_id, order_num)
where
  parent_id is null;

create unique index idx_menu_item_order_child on menu_item (menu_id, parent_id, order_num)
where
  parent_id is not null;