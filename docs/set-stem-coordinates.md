# Imposta coordinate STEM - Set STEM coordinates

Consente all'insegnante di personalizzare le coordinate di ciascuna area STEM.
Allows the teacher to customize the coordinates of each STEM area.

```sig
stemTeleporter.setScienceCoordinates(positions.create(100, 64, 100))
stemTeleporter.setTechnologyCoordinates(positions.create(200, 64, 100))
stemTeleporter.setEngineeringCoordinates(positions.create(300, 64, 100))
stemTeleporter.setMathematicsCoordinates(positions.create(400, 64, 100))
stemTeleporter.setArtsCoordinates(positions.create(500, 64, 100))
```

Questi blocchi sono riservati agli insegnanti e consentono di:
- Personalizzare le posizioni delle aree STEM
- Adattare l'estensione a mondi diversi
- Creare layout personalizzati per le lezioni

These blocks are reserved for teachers and allow them to:
- Customize STEM area positions
- Adapt the extension to different worlds
- Create custom layouts for lessons

## Parametri - Parameters

* **position**: La nuova posizione per l'area STEM specifica
* **position**: The new position for the specific STEM area

## Utilizzo - Usage

L'insegnante può utilizzare il blocco "create position" per specificare le coordinate X, Y, Z dove desidera posizionare ciascuna area STEM. Una volta impostate, tutte le funzioni di teletrasporto utilizzeranno le nuove coordinate.

The teacher can use the "create position" block to specify the X, Y, Z coordinates where they want to position each STEM area. Once set, all teleportation functions will use the new coordinates.

## Coordinate predefinite - Default coordinates

- Scienze/Science: (100, 64, 100)
- Tecnologia/Technology: (200, 64, 100)
- Ingegneria/Engineering: (300, 64, 100)
- Matematica/Mathematics: (400, 64, 100)
- Arte/Arts: (500, 64, 100)

## Suggerimenti - Tips

- Utilizzare coordinate con Y=64 o superiore per evitare il sottosuolo
- Distanziare le aree di almeno 50 blocchi per evitare sovrapposizioni
- Testare le coordinate prima di iniziare le lezioni

- Use coordinates with Y=64 or higher to avoid underground
- Space areas at least 50 blocks apart to avoid overlaps
- Test coordinates before starting lessons

```package
makecode-minecraft-stem-teleporter=github:username/makecode-minecraft-stem-teleporter
```
