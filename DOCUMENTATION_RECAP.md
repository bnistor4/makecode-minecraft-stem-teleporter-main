# STEM Teleporter Extension - Documentazione Completa

## 📋 Panoramica del Plugin

L'estensione **STEM Teleporter** per MakeCode Minecraft Education è un potente strumento educativo che facilita la navigazione tra diverse aree tematiche STEM (Science, Technology, Engineering, Mathematics, Arts) all'interno di mondi Minecraft educativi.

### 🎯 Obiettivi Educativi

- **Organizzazione spaziale**: Suddivisione logica degli spazi di apprendimento
- **Gestione della classe**: Controllo efficiente del movimento degli studenti
- **Accessibilità**: Navigazione semplice e intuitiva per studenti di tutte le età
- **Flessibilità**: Adattabilità a diversi layout di mondo e metodologie didattiche

## 🏗️ Architettura del Plugin

### Struttura dei File
```
makecode-minecraft-stem-teleporter-main/
├── main.ts                    # Codice principale dell'estensione
├── pxt.json                   # Configurazione del progetto MakeCode
├── README.md                  # Documentazione utente
├── LICENSE                    # Licenza MIT
├── test.ts                    # File di test per le funzionalità
├── tsconfig.json             # Configurazione TypeScript
├── .gitignore                # File da ignorare in Git
└── docs/                     # Documentazione dettagliata
    ├── teleport-science.md
    ├── teleport-technology.md
    ├── teleport-engineering.md
    ├── teleport-mathematics.md
    ├── teleport-arts.md
    ├── teacher-teleport-self.md
    ├── teacher-teleport-student.md
    ├── teacher-teleport-group.md
    ├── teacher-teleport-all.md
    └── set-stem-coordinates.md
```

### Namespace e Organizzazione
- **Namespace principale**: `stemTeleporter`
- **Colore del blocco**: Verde (#4CAF50)
- **Icona**: Simbolo di teletrasporto (\uf0e2)
- **Gruppi di blocchi**: "Studenti - Students" e "Insegnanti - Teachers"

## 🎮 Funzionalità per Studenti

### Blocchi di Teletrasporto Base
Ogni area STEM ha un blocco dedicato che consente il teletrasporto immediato:

1. **teleportToScience()**: Teletrasporto all'area Scienze
2. **teleportToTechnology()**: Teletrasporto all'area Tecnologia  
3. **teleportToEngineering()**: Teletrasporto all'area Ingegneria
4. **teleportToMathematics()**: Teletrasporto all'area Matematica
5. **teleportToArts()**: Teletrasporto all'area Arte

### Caratteristiche
- **Interfaccia bilingue**: Etichette in italiano e inglese
- **Feedback immediato**: Messaggio di benvenuto all'arrivo
- **Semplicità d'uso**: Un singolo clic per il teletrasporto
- **Sicurezza**: Coordinate predefinite sicure

## 👨‍🏫 Funzionalità per Insegnanti

### Gestione delle Coordinate
Gli insegnanti possono personalizzare le posizioni delle aree STEM:

- **setScienceCoordinates(position)**: Imposta coordinate area Scienze
- **setTechnologyCoordinates(position)**: Imposta coordinate area Tecnologia
- **setEngineeringCoordinates(position)**: Imposta coordinate area Ingegneria
- **setMathematicsCoordinates(position)**: Imposta coordinate area Matematica
- **setArtsCoordinates(position)**: Imposta coordinate area Arte

### Controllo del Movimento Studenti

#### Teletrasporto Individuale
- **teacherTeleportStudent(studentName, area)**: Teletrasporta uno studente specifico

#### Teletrasporto di Gruppo
- **teacherTeleportGroup(students, area)**: Teletrasporta un gruppo personalizzato
- **teacherTeleportAllStudents(area)**: Teletrasporta tutti gli studenti predefiniti
- **teacherTeleportAllPlayers(area)**: Teletrasporta tutti i giocatori online

#### Auto-Teletrasporto
- **teacherTeleportSelf(area)**: Consente all'insegnante di spostarsi

## 🔧 Sistema di Coordinate

### Coordinate Predefinite
```typescript
Science:     (100, 64, 100)
Technology:  (200, 64, 100)
Engineering: (300, 64, 100)
Mathematics: (400, 64, 100)
Arts:        (500, 64, 100)
```

### Sistema di Coordinate Personalizzate
Il plugin utilizza una classe `STEMCoordinates` che mantiene sia le coordinate predefinite che quelle personalizzate, consentendo agli insegnanti di adattare l'estensione a qualsiasi mondo Minecraft.

## 👥 Gestione degli Utenti

### Nomi Studenti Predefiniti
Il sistema riconosce automaticamente questi username:
- **Serie inglese**: Student1-Student10
- **Serie italiana**: Studente1-Studente5, Alunno1-Alunno5

### Flessibilità dei Nomi
Gli insegnanti possono:
- Utilizzare nomi personalizzati
- Creare gruppi dinamici
- Gestire liste di studenti separati da virgole

## 🛠️ Implementazione Tecnica

### Enum STEMArea
```typescript
export enum STEMArea {
    Science,
    Technology, 
    Engineering,
    Mathematics,
    Arts
}
```

### Gestione dei Comandi
Il plugin utilizza:
- **mobs.teleport()**: Per il teletrasporto del giocatore corrente
- **player.execute()**: Per comandi di teletrasporto specifici per nome
- **Selettori Minecraft**: @a per tutti i giocatori, nomi specifici per targeting individuale

### Feedback e Messaggi
Ogni azione di teletrasporto include:
- Messaggio di conferma bilingue
- Indicazione dell'area di destinazione
- Feedback per azioni di gruppo

## 📚 Utilizzo Educativo

### Scenari d'Uso Tipici

1. **Lezioni Strutturate**: Gli insegnanti guidano la classe attraverso diverse aree tematiche
2. **Esplorazione Autonoma**: Gli studenti navigano liberamente tra le aree
3. **Attività di Gruppo**: Divisione della classe in team per diverse aree
4. **Presentazioni**: Raduno di tutti gli studenti per presentazioni collettive

### Best Practices

#### Per Insegnanti
- **Preparazione**: Impostare coordinate personalizzate prima delle lezioni
- **Test**: Verificare tutte le posizioni prima dell'arrivo degli studenti
- **Organizzazione**: Utilizzare il teletrasporto di gruppo per attività collaborative
- **Supervisione**: Utilizzare l'auto-teletrasporto per monitorare le attività

#### Per l'Implementazione
- **Distanze**: Mantenere almeno 50 blocchi tra le aree
- **Altezza**: Utilizzare Y ≥ 64 per evitare spawning sotterraneo
- **Accessibilità**: Creare piattaforme di atterraggio sicure
- **Segnaletica**: Aggiungere cartelli e indicazioni nelle aree

## 🔒 Sicurezza e Controlli

### Controlli di Accesso
- **Separazione funzionale**: Blocchi studenti e insegnanti distinti
- **Nomi predefiniti**: Lista controllata di username studenti
- **Coordinate sicure**: Posizioni predefinite testate

### Gestione Errori
- **Validazione input**: Controllo nomi utenti e coordinate
- **Fallback**: Coordinate predefinite in caso di errore
- **Feedback**: Messaggi di errore informativi

## 📈 Estensibilità

### Possibili Miglioramenti Futuri
1. **Aree aggiuntive**: Supporto per più aree tematiche
2. **Permessi avanzati**: Sistema di ruoli più granulare
3. **Statistiche**: Tracking delle visite alle aree
4. **Integrazione**: Connessione con altri plugin educativi
5. **Personalizzazione**: Temi e colori personalizzabili

### API per Sviluppatori
Il plugin espone classi e funzioni riutilizzabili:
- `STEMCoordinates`: Gestione delle coordinate
- `STEMArea`: Enum delle aree disponibili
- Funzioni di teletrasporto modulari

## 🧪 Testing e Qualità

### File di Test
Il plugin include `test.ts` con:
- Test delle funzioni di teletrasporto studenti
- Test delle impostazioni coordinate
- Test delle funzioni insegnante
- Comandi di chat per testing interattivo

### Procedure di Test Raccomandate
1. **Test coordinate**: Verificare tutte le posizioni predefinite
2. **Test nomi**: Provare diversi username studenti
3. **Test gruppi**: Verificare teletrasporto di gruppo
4. **Test errori**: Testare scenari di fallimento

## 📋 Conclusioni

L'estensione STEM Teleporter rappresenta una soluzione completa per la gestione spaziale in ambienti educativi Minecraft. La sua architettura bilingue, la separazione chiara tra funzionalità studenti e insegnanti, e la flessibilità di personalizzazione la rendono adatta a diversi contesti educativi.

### Punti di Forza
- **Semplicità d'uso** per gli studenti
- **Controllo completo** per gli insegnanti  
- **Flessibilità** di configurazione
- **Documentazione completa** bilingue
- **Codice modulare** e estensibile

### Impatto Educativo
Il plugin facilita l'organizzazione di attività STEM strutturate, riduce i tempi di spostamento, e consente agli educatori di concentrarsi sui contenuti didattici piuttosto che sulla logistica di movimento nel mondo virtuale.
