# STEM Teleporter Extension per MakeCode Minecraft Education

Un'estensione per MakeCode Minecraft Education che consente a studenti e insegnanti di teletrasportarsi facilmente tra diverse aree STEM (Scienze, Tecnologia, Ingegneria, Matematica e Arte).

A MakeCode Minecraft Education extension that allows students and teachers to easily teleport between different STEM areas (Science, Technology, Engineering, Mathematics, and Arts).

## 🎯 Caratteristiche - Features

### Per gli Studenti - For Students
- **Teletrasporto semplice**: Un clic per raggiungere l'area STEM desiderata
- **5 aree STEM**: Scienze, Tecnologia, Ingegneria, Matematica, Arte
- **Interfaccia bilingue**: Supporto italiano e inglese
- **Messaggi di benvenuto**: Conferma della destinazione raggiunta

- **Simple teleportation**: One click to reach the desired STEM area
- **5 STEM areas**: Science, Technology, Engineering, Mathematics, Arts
- **Bilingual interface**: Italian and English support
- **Welcome messages**: Confirmation of reached destination

### Per gli Insegnanti - For Teachers
- **Controllo completo**: Gestione di studenti individuali e gruppi
- **Coordinate personalizzabili**: Adatta le aree al tuo mondo Minecraft
- **Nomi studenti predefiniti**: Lista di usernames comuni già configurata
- **Teletrasporto di massa**: Sposta tutti gli studenti contemporaneamente

- **Complete control**: Management of individual students and groups
- **Customizable coordinates**: Adapt areas to your Minecraft world
- **Default student names**: List of common usernames already configured
- **Mass teleportation**: Move all students simultaneously

## 🚀 Installazione - Installation

1. Apri MakeCode per Minecraft Education
2. Clicca su "Estensioni" / "Extensions"
3. Cerca "STEM Teleporter" o incolla l'URL del repository
4. Clicca "Aggiungi" / "Add"

## 📚 Utilizzo - Usage

### Studenti - Students

Gli studenti troveranno nel menu "STEM Teleporter" i seguenti blocchi nel gruppo "Studenti - Students":

Students will find the following blocks in the "STEM Teleporter" menu under the "Studenti - Students" group:

- 🔬 **Teletrasporto area Scienze** - Teleport to Science area
- 💻 **Teletrasporto area Tecnologia** - Teleport to Technology area
- 🏗️ **Teletrasporto area Ingegneria** - Teleport to Engineering area
- 📐 **Teletrasporto area Matematica** - Teleport to Mathematics area
- 🎨 **Teletrasporto area Arte** - Teleport to Arts area

### Insegnanti - Teachers

Gli insegnanti hanno accesso a funzioni avanzate nel gruppo "Insegnanti - Teachers":

Teachers have access to advanced functions in the "Insegnanti - Teachers" group:

#### Impostazione Coordinate - Coordinate Setup
- **Imposta coordinate Scienze** - Set Science coordinates
- **Imposta coordinate Tecnologia** - Set Technology coordinates
- **Imposta coordinate Ingegneria** - Set Engineering coordinates
- **Imposta coordinate Matematica** - Set Mathematics coordinates
- **Imposta coordinate Arte** - Set Arts coordinates

#### Gestione Studenti - Student Management
- **Insegnante teletrasportati** - Teacher teleport yourself
- **Teletrasporta studente** - Teleport specific student
- **Teletrasporta gruppo** - Teleport group of students
- **Teletrasporta tutti gli studenti** - Teleport all default students
- **Teletrasporta tutti i giocatori** - Teleport all online players

## 🎮 Esempi di Codice - Code Examples

### Esempio base per studenti - Basic example for students
```typescript
// Teletrasporto all'area Scienze
stemTeleporter.teleportToScience()

// Teletrasporto all'area Matematica
stemTeleporter.teleportToMathematics()
```

### Esempio per insegnanti - Example for teachers
```typescript
// Imposta le coordinate dell'area Scienze
stemTeleporter.setScienceCoordinates(positions.create(150, 70, 200))

// Teletrasporta uno studente specifico
stemTeleporter.teacherTeleportStudent("Student1", STEMArea.Science)

// Teletrasporta un gruppo di studenti
stemTeleporter.teacherTeleportGroup("Student1,Student2,Student3", STEMArea.Technology)

// Teletrasporta tutti gli studenti predefiniti
stemTeleporter.teacherTeleportAllStudents(STEMArea.Engineering)
```

## 📍 Coordinate Predefinite - Default Coordinates

Le aree STEM hanno le seguenti coordinate predefinite (personalizzabili):

STEM areas have the following default coordinates (customizable):

- **Scienze/Science**: (100, 64, 100)
- **Tecnologia/Technology**: (200, 64, 100)
- **Ingegneria/Engineering**: (300, 64, 100)
- **Matematica/Mathematics**: (400, 64, 100)
- **Arte/Arts**: (500, 64, 100)

## 👥 Nomi Studenti Predefiniti - Default Student Names

Il sistema riconosce automaticamente questi usernames:

The system automatically recognizes these usernames:

- Student1, Student2, Student3, ..., Student10
- Studente1, Studente2, Studente3, Studente4, Studente5
- Alunno1, Alunno2, Alunno3, Alunno4, Alunno5

## 🛠️ Personalizzazione - Customization

### Per Insegnanti - For Teachers

1. **Imposta le coordinate**: Utilizza i blocchi "imposta coordinate" per posizionare le aree STEM nel tuo mondo
2. **Testa le posizioni**: Usa "insegnante teletrasportati" per verificare le coordinate
3. **Prepara le aree**: Costruisci le strutture educative nelle posizioni scelte
4. **Organizza la classe**: Usa i blocchi di teletrasporto gruppo per distribuire gli studenti

1. **Set coordinates**: Use "set coordinates" blocks to position STEM areas in your world
2. **Test positions**: Use "teacher teleport yourself" to verify coordinates
3. **Prepare areas**: Build educational structures at chosen locations
4. **Organize class**: Use group teleport blocks to distribute students

## 🔧 Risoluzione Problemi - Troubleshooting

### Problemi Comuni - Common Issues

**Q: Gli studenti non vengono teletrasportati**
A: Verifica che i nomi utente siano corretti e che i giocatori siano online

**Q: Le coordinate non funzionano**
A: Assicurati che le coordinate Y siano >= 64 per evitare il sottosuolo

**Q: I blocchi non appaiono**
A: Ricarica l'estensione e verifica che sia installata correttamente

**Q: Students are not being teleported**
A: Check that usernames are correct and players are online

**Q: Coordinates don't work**
A: Make sure Y coordinates are >= 64 to avoid underground

**Q: Blocks don't appear**
A: Reload the extension and verify it's installed correctly

## 📄 Licenza - License

Questo progetto è rilasciato sotto licenza MIT. Vedi il file LICENSE per i dettagli.

This project is released under the MIT License. See the LICENSE file for details.

## 🤝 Contributi - Contributing

I contributi sono benvenuti! Sentiti libero di:
- Segnalare bug
- Suggerire nuove funzionalità
- Inviare pull request
- Migliorare la documentazione

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📞 Supporto - Support

Per supporto e domande:
- Apri una issue su GitHub
- Contatta il team di sviluppo
- Consulta la documentazione completa

For support and questions:
- Open an issue on GitHub
- Contact the development team
- Check the complete documentation

---

**Sviluppato per l'educazione STEM - Developed for STEM education** 🎓
