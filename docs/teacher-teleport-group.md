# Teletrasporta gruppo - Teleport group

Consente all'insegnante di teletrasportare un gruppo di studenti o tutti gli studenti predefiniti.
Allows the teacher to teleport a group of students or all default students.

```sig
stemTeleporter.teacherTeleportGroup("Student1,Student2,Student3", STEMArea.Science)
stemTeleporter.teacherTeleportAllStudents(STEMArea.Technology)
```

Questi blocchi sono riservati agli insegnanti e consentono di:
- Teletrasportare gruppi personalizzati di studenti
- Teletrasportare tutti gli studenti predefiniti contemporaneamente
- Organizzare rapidamente la classe

These blocks are reserved for teachers and allow them to:
- Teleport custom groups of students
- Teleport all default students simultaneously
- Quickly organize the class

## Parametri - Parameters

### teacherTeleportGroup
* **students**: Lista di nomi studenti separati da virgola
* **area**: L'area STEM di destinazione

### teacherTeleportAllStudents
* **area**: L'area STEM di destinazione

### teacherTeleportGroup
* **students**: Comma-separated list of student names
* **area**: The target STEM area

### teacherTeleportAllStudents
* **area**: The target STEM area

## Utilizzo - Usage

### Gruppo personalizzato - Custom group
L'insegnante inserisce i nomi degli studenti separati da virgola (es: "Student1,Student2,Student3") e seleziona l'area di destinazione.

The teacher enters student names separated by commas (e.g., "Student1,Student2,Student3") and selects the destination area.

### Tutti gli studenti - All students
L'insegnante seleziona solo l'area di destinazione e tutti gli studenti predefiniti vengono teletrasportati.

The teacher only selects the destination area and all default students are teleported.

```package
makecode-minecraft-stem-teleporter=github:username/makecode-minecraft-stem-teleporter
```
