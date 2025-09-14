# Teletrasporta studente di scuola

Consente all'insegnante di teletrasportare uno studente specifico di una scuola in un'area STEM.

```sig
stemTeleporter.teacherTeleportStudentBySchool(Scuola.ScuolaPrimariaLeonardo, 1, STEMArea.Science)
```

Questo blocco è riservato agli insegnanti e consente di:
- Teletrasportare singoli studenti identificati per scuola e numero
- Gestire studenti specifici senza conoscere il nome utente esatto
- Organizzare gruppi misti da diverse scuole

## Parametri

* **scuola**: La scuola dello studente
* **numeroStudente**: Il numero dello studente (da 1 a 10)
* **area**: L'area STEM di destinazione

## Numerazione Studenti

Ogni scuola ha 10 studenti numerati da 1 a 10:

### Scuola Primaria Leonardo
- 1 = Leonardo1, 2 = Leonardo2, ..., 10 = Leonardo10

### Scuola Primaria Galilei  
- 1 = Galilei1, 2 = Galilei2, ..., 10 = Galilei10

### Scuola Media Marconi
- 1 = Marconi1, 2 = Marconi2, ..., 10 = Marconi10

### Liceo Scientifico Fermi
- 1 = Fermi1, 2 = Fermi2, ..., 10 = Fermi10

## Utilizzo

L'insegnante seleziona:
1. La scuola dello studente
2. Il numero dello studente (1-10)
3. L'area STEM di destinazione

Il sistema teletrasporta automaticamente lo studente corrispondente.

## Validazione

Il sistema verifica che il numero studente sia valido (1-10). Se il numero non è valido, viene mostrato un messaggio di errore.

```package
teletrasporto-stem=github:username/teletrasporto-stem
```
