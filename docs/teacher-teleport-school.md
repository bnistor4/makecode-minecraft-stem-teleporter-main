# Teletrasporta studenti di scuola

Consente all'insegnante di teletrasportare tutti gli studenti di una scuola specifica in un'area STEM.

```sig
stemTeleporter.teacherTeleportSchool(Scuola.ScuolaPrimariaLeonardo, STEMArea.Science)
```

Questo blocco è riservato agli insegnanti e consente di:
- Teletrasportare tutti gli studenti di una scuola selezionata
- Gestire facilmente gruppi classe organizzati per istituto
- Coordinare attività tra diverse scuole

## Parametri

* **scuola**: La scuola di cui teletrasportare gli studenti
* **area**: L'area STEM di destinazione

## Scuole Disponibili

Il sistema supporta 4 scuole predefinite:
- **Scuola Primaria Leonardo**: studenti Leonardo1-Leonardo10
- **Scuola Primaria Galilei**: studenti Galilei1-Galilei10  
- **Scuola Media Marconi**: studenti Marconi1-Marconi10
- **Liceo Scientifico Fermi**: studenti Fermi1-Fermi10

## Utilizzo

L'insegnante seleziona la propria scuola dal menu a tendina e l'area STEM di destinazione. Tutti i 10 studenti della scuola verranno teletrasportati contemporaneamente.

## Esempio

Per teletrasportare tutti gli studenti della Scuola Primaria Leonardo nell'area Scienze:
1. Seleziona "Scuola Primaria Leonardo"
2. Seleziona "Scienze"
3. Esegui il blocco

Tutti gli studenti da Leonardo1 a Leonardo10 saranno teletrasportati nell'area Scienze.

```package
teletrasporto-stem=github:username/teletrasporto-stem
```
