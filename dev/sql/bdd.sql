CREATE DATABASE blindtestproject;
USE blindtestproject;

CREATE TABLE utilisateurs(
	u_id     int          NOT NULL AUTO_INCREMENT,
	u_pseudo varchar(255) NOT NULL,
	u_mail   varchar(255) NOT NULL UNIQUE,
	u_mdp    varchar(255) NOT NULL,
	u_score  int          NOT NULL DEFAULT 0,
	PRIMARY KEY (u_id)
);

CREATE TABLE playlists(
	p_id          int          NOT NULL AUTO_INCREMENT,
	p_nom         varchar(255) NOT NULL,
	p_description varchar(255),
	p_difficulte  int          NOT NULL,
	u_id          int          NOT NULL,
	CHECK (p_difficulte >= 1 AND p_difficulte <= 3),
	PRIMARY KEY (p_id),
	FOREIGN KEY (u_id) REFERENCES utilisateurs(u_id)
);

CREATE TABLE musiques(
	m_id     int          NOT NULL AUTO_INCREMENT,
	m_url    varchar(255) NOT NULL,
	p_id     int          NOT NULL,
	PRIMARY KEY (m_id),
	FOREIGN KEY (p_id) REFERENCES playlists(p_id)
);

CREATE TABLE questions(
	q_id     int  NOT NULL AUTO_INCREMENT,
	q_texte  text NOT NULL,
	m_id     int  NOT NULL,
	PRIMARY KEY (q_id),
	FOREIGN KEY (m_id) REFERENCES musiques(m_id)
);

CREATE TABLE reponses(
	r_id       int          NOT NULL AUTO_INCREMENT,
	r_texte    varchar(255) NOT NULL,
	r_correcte int          NOT NULL,
	q_id       int          NOT NULL,
	CHECK (r_correcte = 0 OR r_correcte = 1),
	PRIMARY KEY (r_id),
	FOREIGN KEY (q_id) REFERENCES questions(q_id)
);

CREATE TABLE leaderboard(
	l_id  int  NOT NULL AUTO_INCREMENT,
	p_id  int  NOT NULL,
	u_id  int  NOT NULL,
	score int  NOT NULL DEFAULT 0,
	temps int  NOT NULL DEFAULT 999999999,
	PRIMARY KEY (l_id),
	FOREIGN KEY (p_id) REFERENCES playlists(p_id),
	FOREIGN KEY (u_id) REFERENCES utilisateurs(u_id)
);