DROP DATABASE IF EXISTS W_S;

CREATE DATABASE W_S;

USE W_S
DROP TABLE IF EXISTS make

CREATE TABLE make(
id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
reg_date DATETIME NOT NULL,
detail VARCHAR(200) NOT NULL,
author VARCHAR(200) NOT NULL)

DESC make

INSERT INTO make
SET reg_date = NOW(),
detail = '삶이 있는 한 희망은 있다',
author = '키케로'; 

INSERT INTO make
SET reg_date = NOW(),
detail = '산다는것 그것은 치열한 전투이다.',
author = '로망로랑'; 

INSERT INTO make
SET reg_date = NOW(),
detail = '언제나 현재에 집중할수 있다면 행복할것이다.',
author = '파울로 코엘료'; 

INSERT INTO make
SET reg_date = NOW(),
detail = '신은 용기있는자를 결코 버리지 않는다.',
author = '켄러'; 

INSERT INTO make
SET reg_date = NOW(),
detail = '먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에',
author = '엘사 맥스웰'; 

INSERT INTO make
SET reg_date = NOW(),
detail = '행복은 습관이다,그것을 몸에 지니라 ',
author = '허버드'; 

INSERT INTO make
SET reg_date = NOW(),
detail = '자신감 있는 표정을 지으면 자신감이 생긴다 ',
author = '찰스다윈'; 

INSERT INTO make
SET reg_date = NOW(),
detail = '1퍼센트의 가능성, 그것이 나의 길이다 ',
author = '나폴레옹'; 

INSERT INTO make
SET reg_date = NOW(),
detail = '꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다. ',
author = '괴테';

INSERT INTO make
SET reg_date = NOW(),
detail = '만약 우리가 할 수 있는 일을 모두 한다면 우리들은 우리자신에 깜짝 놀랄 것이다. ',
author = '에디슨';

SELECT * FROM make

ALTER TABLE make ADD COLUMN 