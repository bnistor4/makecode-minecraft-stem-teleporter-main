# Teletrasporta studente - Teleport student

Consente all'insegnante di teletrasportare uno studente specifico in un'area STEM.
Allows the teacher to teleport a specific student to a STEM area.

```sig
stemTeleporter.teacherTeleportStudent("Student1", STEMArea.Science)
```

Questo blocco è riservato agli insegnanti e consente di:
- Teletrasportare singoli studenti
- Gestire la distribuzione degli studenti nelle diverse aree
- Aiutare studenti che si sono persi

This block is reserved for teachers and allows them to:
- Teleport individual students
- Manage student distribution across different areas
- Help students who got lost

## Parametri - Parameters

* **studentName**: Il nome utente dello studente da teletrasportare
* **area**: L'area STEM di destinazione

* **studentName**: The username of the student to teleport
* **area**: The target STEM area

## Utilizzo - Usage

L'insegnante inserisce il nome dello studente e seleziona l'area di destinazione. Lo studente verrà immediatamente teletrasportato.

The teacher enters the student's name and selects the destination area. The student will be immediately teleported.

## Nomi studenti predefiniti - Default student names

Il sistema riconosce automaticamente questi nomi:
- Student1, Student2, ..., Student10
- Studente1, Studente2, ..., Studente5
- Alunno1, Alunno2, ..., Alunno5

The system automatically recognizes these names:
- Student1, Student2, ..., Student10
- Studente1, Studente2, ..., Studente5
- Alunno1, Alunno2, ..., Alunno5

```package
makecode-minecraft-stem-teleporter=github:username/makecode-minecraft-stem-teleporter
```
