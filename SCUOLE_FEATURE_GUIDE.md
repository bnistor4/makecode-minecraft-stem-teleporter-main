# Guida alle Funzionalità delle Scuole - v1.2.0

## 🏫 Nuove Funzionalità per le Scuole

L'estensione **Teletrasporto STEM** è stata aggiornata per supportare **4 scuole diverse** con studenti organizzati per istituto. Ora gli insegnanti possono gestire facilmente i loro studenti per scuola!

## 🎓 Le 4 Scuole Supportate

### 1. **Scuola Primaria Leonardo**
- **Studenti**: Leonardo1, Leonardo2, Leonardo3, ..., Leonardo10
- **Età target**: 6-11 anni
- **Livello**: Scuola Primaria

### 2. **Scuola Primaria Galilei**  
- **Studenti**: Galilei1, Galilei2, Galilei3, ..., Galilei10
- **Età target**: 6-11 anni
- **Livello**: Scuola Primaria

### 3. **Scuola Media Marconi**
- **Studenti**: Marconi1, Marconi2, Marconi3, ..., Marconi10
- **Età target**: 11-14 anni
- **Livello**: Scuola Secondaria di Primo Grado

### 4. **Liceo Scientifico Fermi**
- **Studenti**: Fermi1, Fermi2, Fermi3, ..., Fermi10
- **Età target**: 14-19 anni
- **Livello**: Scuola Secondaria di Secondo Grado

## 🔧 Nuovi Blocchi per Insegnanti

### 1. **Teletrasporta Studenti di Scuola**
```
teletrasporta studenti di [Scuola] in area [Area STEM]
```
- **Funzione**: Teletrasporta tutti i 10 studenti di una scuola
- **Utilizzo**: Perfetto per spostare l'intera classe
- **Esempio**: `teletrasporta studenti di Scuola Primaria Leonardo in area Scienze`

### 2. **Teletrasporta Studente Specifico per Scuola**
```
teletrasporta studente numero [1-10] di [Scuola] in area [Area STEM]
```
- **Funzione**: Teletrasporta uno studente specifico identificato per numero
- **Utilizzo**: Gestione individuale senza conoscere il nome esatto
- **Esempio**: `teletrasporta studente numero 3 di Scuola Media Marconi in area Tecnologia`

### 3. **Mostra Studenti di Scuola**
```
mostra studenti di [Scuola]
```
- **Funzione**: Visualizza la lista completa degli studenti di una scuola
- **Utilizzo**: Controllo presenze e verifica nomi utente
- **Output**: Lista numerata con tutti i nomi studenti

## 🎯 Scenari d'Uso Pratici

### Scenario 1: Lezione Multi-Scuola
```typescript
// L'insegnante vuole portare tutte le scuole nell'area Scienze per una lezione congiunta
stemTeleporter.teacherTeleportSchool(Scuola.ScuolaPrimariaLeonardo, STEMArea.Science);
stemTeleporter.teacherTeleportSchool(Scuola.ScuolaPrimariaGalilei, STEMArea.Science);
stemTeleporter.teacherTeleportSchool(Scuola.ScuolaMediaMarconi, STEMArea.Science);
stemTeleporter.teacherTeleportSchool(Scuola.LiceoScientificoFermi, STEMArea.Science);
```

### Scenario 2: Attività per Livelli
```typescript
// Primarie in area Arte, Medie in Tecnologia, Liceo in Ingegneria
stemTeleporter.teacherTeleportSchool(Scuola.ScuolaPrimariaLeonardo, STEMArea.Arts);
stemTeleporter.teacherTeleportSchool(Scuola.ScuolaPrimariaGalilei, STEMArea.Arts);
stemTeleporter.teacherTeleportSchool(Scuola.ScuolaMediaMarconi, STEMArea.Technology);
stemTeleporter.teacherTeleportSchool(Scuola.LiceoScientificoFermi, STEMArea.Engineering);
```

### Scenario 3: Gestione Studente Specifico
```typescript
// Teletrasporta solo alcuni studenti per attività speciali
stemTeleporter.teacherTeleportStudentBySchool(Scuola.ScuolaPrimariaLeonardo, 1, STEMArea.Mathematics);
stemTeleporter.teacherTeleportStudentBySchool(Scuola.ScuolaMediaMarconi, 5, STEMArea.Mathematics);
stemTeleporter.teacherTeleportStudentBySchool(Scuola.LiceoScientificoFermi, 3, STEMArea.Mathematics);
```

## 📋 Vantaggi del Sistema per Scuole

### ✅ **Per gli Insegnanti**
- **Organizzazione semplice**: Ogni insegnante gestisce solo la sua scuola
- **Controllo granulare**: Teletrasporto di tutta la classe o singoli studenti
- **Identificazione facile**: Nomi studenti chiari per ogni istituto
- **Flessibilità**: Attività miste tra scuole diverse

### ✅ **Per l'Amministrazione**
- **Scalabilità**: Supporto fino a 40 studenti totali (10 per scuola)
- **Tracciabilità**: Ogni studente è chiaramente identificato per scuola
- **Organizzazione**: Struttura gerarchica chiara
- **Compatibilità**: Funziona con le funzioni esistenti

### ✅ **Per gli Studenti**
- **Identità scolastica**: Nomi che riflettono la loro scuola
- **Appartenenza**: Senso di gruppo classe
- **Facilità**: Gli insegnanti li trovano facilmente

## 🔄 Compatibilità con Funzioni Esistenti

Tutte le funzioni precedenti continuano a funzionare:
- ✅ **Teletrasporto studenti**: Funziona con tutti gli studenti
- ✅ **Teletrasporto individuale**: Accetta ancora nomi personalizzati
- ✅ **Teletrasporto gruppo**: Lista personalizzata funziona ancora
- ✅ **Impostazioni coordinate**: Identiche per tutte le scuole

## 🎨 Personalizzazione Nomi Studenti

Se vuoi cambiare i nomi degli studenti, modifica le liste nel codice:

```typescript
const studentiScuolaPrimariaLeonardo = [
    "TuoNome1", "TuoNome2", "TuoNome3", // ... personalizza qui
];
```

## 📊 Statistiche Sistema

- **Scuole supportate**: 4
- **Studenti per scuola**: 10
- **Totale studenti**: 40
- **Aree STEM**: 5 (Scienze, Tecnologia, Ingegneria, Matematica, Arte)
- **Combinazioni possibili**: 200 (40 studenti × 5 aree)

## 🚀 Come Aggiornare

1. **Sostituisci** l'estensione esistente con `teletrasporto-stem-scuole-v1.2.0.mkcd`
2. **Importa** il nuovo file in MakeCode
3. **Testa** le nuove funzioni con `mostra studenti di [scuola]`
4. **Configura** le coordinate se necessario
5. **Inizia** a usare le nuove funzionalità per scuole!

## 🎯 Risultato Finale

Con questa versione 1.2.0, l'estensione **Teletrasporto STEM** è ora perfetta per:

- 🏫 **Gestione multi-scuola** con 4 istituti
- 👨‍🏫 **Controllo per insegnanti** per la propria classe
- 🎓 **Organizzazione studenti** per livello scolastico
- 🔄 **Flessibilità completa** per attività miste
- 📚 **Compatibilità totale** con funzioni esistenti

Il sistema è ora pronto per gestire efficacemente le attività STEM di più scuole contemporaneamente! 🎉
