/* Un bloc de commentaire
*/

--une ligne de commentaire

/* Create a table called Personnes */
CREATE TABLE Personnes(Id integer PRIMARY KEY, prenom text, age int, metier text );

/* Create few records in this table */
INSERT INTO Personnes VALUES(1,'Tom', 28 , 'Cuisinier');
INSERT INTO Personnes VALUES(2,'Lucy', 18 , 'Etudiante');
INSERT INTO Personnes VALUES(3,'Frank', 31 , 'Cariste');
INSERT INTO Personnes VALUES(4,'Jane',  21 , 'Musicienne' );
INSERT INTO Personnes VALUES(5,'Robert', 54 , 'Chauffeur');

-- 1. Afficher les toutes les colonnes de la table personnes
SELECT*from personnes;
-- 2. Afficher juste le prénom
SELECT prenom FROM personnes;

-- 3 affichez le prenom et l'age
SELECT prenom, age FROM personnes
-- 4 Affichez les informations de Lucy


-- 5 affichez le prenom et l'age du Cuisinier

-- 6 Affichez les personnes qui ne sont pas Cariste

-- 7 Affichez les personnes de plus de 30 ans

-- 8 Affichez les personnes de moins de 40 ans

-- 9 Afficher la personne de moins de 30 ans et qui est musicienne

-- 10 Afficher le Cuisinier et le Chauffeur

--11 Affichez les personnes de moins de 40 ans et qui ont un id > 2

-- 12. trouvez les prénoms qui contiennent un 'a'

-- 13. Trouvez les métiers qui contiennent à la fois un 'e' et un 'r'

-- Bonus Affichez les personnes qui ont un métier qui contient au moins 2 voyelles identiques trié par ordre alphabétique de prénom

-- 14. Affichez le Cariste, le Cuisinier et l'Etudiante


-- 15. affichez les personnes entre 20 et 40 ans


-- 16. Affichez toute la table par ordre croissant d'age


-- 17. Affichez les personnes qui ne sont pas compris entre 20 et 40 ans par ordre décroissant d'age