# Guida ai Pacchetti .mkcd per MakeCode - .mkcd Package Guide

## 🎯 Che cos'è un file .mkcd? - What is a .mkcd file?

Un file `.mkcd` è un pacchetto di estensione MakeCode che contiene tutti i file necessari per installare un'estensione in MakeCode Minecraft Education Edition. È essenzialmente un file ZIP rinominato con estensione `.mkcd`.

A `.mkcd` file is a MakeCode extension package that contains all the necessary files to install an extension in MakeCode Minecraft Education Edition. It's essentially a ZIP file renamed with the `.mkcd` extension.

## 📦 Come creare un pacchetto .mkcd - How to create a .mkcd package

### Metodo 1: Manuale - Manual Method

1. **Preparare i file** - Prepare the files:
   ```
   makecode-minecraft-stem-teleporter-main/
   ├── main.ts                    # Codice principale
   ├── pxt.json                   # Configurazione progetto
   ├── README.md                  # Documentazione
   ├── icon.png                   # Icona (64x64 pixel)
   ├── docs/                      # Documentazione dettagliata
   └── [altri file necessari]     # Other necessary files
   ```

2. **Creare il file ZIP** - Create ZIP file:
   ```powershell
   # Windows PowerShell
   Compress-Archive -Path * -DestinationPath ../estensione.zip
   
   # Linux/Mac
   zip -r ../estensione.zip *
   ```

3. **Rinominare in .mkcd** - Rename to .mkcd:
   ```powershell
   # Windows
   Rename-Item estensione.zip estensione.mkcd
   
   # Linux/Mac
   mv estensione.zip estensione.mkcd
   ```

### Metodo 2: Script Automatico - Automated Script

Crea uno script PowerShell `create-mkcd.ps1`:

```powershell
# create-mkcd.ps1
param(
    [Parameter(Mandatory=$true)]
    [string]$ExtensionName,
    
    [Parameter(Mandatory=$false)]
    [string]$Version = "1.0.0"
)

$packageName = "$ExtensionName-v$Version.mkcd"

Write-Host "Creazione pacchetto $packageName..." -ForegroundColor Green

# Comprimi tutti i file
Compress-Archive -Path * -DestinationPath "../temp.zip" -Force

# Rinomina in .mkcd
Rename-Item "../temp.zip" "../$packageName"

Write-Host "Pacchetto creato: $packageName" -ForegroundColor Green
```

Utilizzo:
```powershell
.\create-mkcd.ps1 -ExtensionName "stem-teleporter" -Version "1.0.0"
```

## 📋 File obbligatori per .mkcd - Required files for .mkcd

### File essenziali - Essential files:
- **`pxt.json`** - Configurazione dell'estensione
- **`main.ts`** (o file TypeScript principale) - Codice dell'estensione
- **`README.md`** - Documentazione utente
- **`icon.png`** - Icona dell'estensione (64x64 pixel raccomandati)

### File opzionali - Optional files:
- **`docs/`** - Cartella con documentazione dettagliata
- **`test.ts`** - File di test
- **`LICENSE`** - Licenza del progetto
- **`.gitignore`** - File Git ignore
- **`tsconfig.json`** - Configurazione TypeScript

## 🔧 Struttura del pxt.json

Il file `pxt.json` deve contenere almeno:

```json
{
    "name": "nome-estensione",
    "version": "1.0.0",
    "description": "Descrizione dell'estensione",
    "dependencies": {
        "core": "*"
    },
    "files": [
        "main.ts",
        "README.md",
        "icon.png",
        "docs/file1.md",
        "docs/file2.md"
    ],
    "testFiles": ["test.ts"],
    "supportedTargets": ["minecraft"],
    "preferredEditor": "tsprj",
    "icon": "icon.png"
}
```

### Campi importanti - Important fields:
- **`name`**: Nome unico dell'estensione
- **`version`**: Versione seguendo semantic versioning
- **`supportedTargets`**: `["minecraft"]` per Minecraft Education
- **`files`**: Lista di tutti i file da includere
- **`dependencies`**: Dipendenze richieste

## 🚀 Come installare un pacchetto .mkcd - How to install a .mkcd package

### In MakeCode Minecraft Education:

1. **Apri MakeCode** - Open MakeCode
2. **Vai a "Extensions"** - Go to "Extensions"
3. **Clicca "Import"** - Click "Import"
4. **Seleziona il file .mkcd** - Select the .mkcd file
5. **L'estensione viene installata automaticamente** - Extension installs automatically

### Metodi alternativi - Alternative methods:

#### Metodo 1: Import URL
```
https://github.com/username/repository-name
```

#### Metodo 2: Import da file locale
- Drag & drop del file .mkcd nell'editor
- Oppure usa il pulsante "Import File"

## 🎯 Pacchetto STEM Teleporter creato

### Dettagli del pacchetto - Package details:
- **Nome file**: `stem-teleporter-v1.0.0.mkcd`
- **Dimensione**: ~20KB
- **Versione**: 1.0.0
- **Target**: Minecraft Education Edition

### Contenuto del pacchetto - Package contents:
- ✅ Codice principale (`main.ts`)
- ✅ Configurazione (`pxt.json`)
- ✅ Documentazione completa (`README.md` + `docs/`)
- ✅ Licenza MIT (`LICENSE`)
- ✅ File di test (`test.ts`)
- ✅ Icona placeholder (`icon.png`)

## 📤 Come distribuire - How to distribute

### Opzione 1: GitHub Release
1. Carica il repository su GitHub
2. Crea una release
3. Allega il file `.mkcd` alla release
4. Gli utenti possono scaricare e importare

### Opzione 2: Condivisione diretta
1. Invia il file `.mkcd` via email/drive
2. Gli utenti lo importano direttamente in MakeCode

### Opzione 3: Repository MakeCode
1. Pubblica su GitHub
2. Gli utenti importano usando l'URL del repository

## 🔍 Verifica del pacchetto - Package verification

### Controlli da fare - Checks to perform:

1. **Verifica struttura file** - Check file structure:
   ```powershell
   # Estrai e controlla contenuto
   Expand-Archive stem-teleporter-v1.0.0.mkcd -DestinationPath temp-check
   dir temp-check
   ```

2. **Valida pxt.json** - Validate pxt.json:
   ```json
   # Verifica che tutti i file in "files" esistano
   # Check that all files in "files" array exist
   ```

3. **Testa importazione** - Test import:
   - Importa in MakeCode
   - Verifica che tutti i blocchi appaiano
   - Testa le funzionalità base

## ⚠️ Problemi comuni - Common issues

### Errori di importazione - Import errors:

1. **File mancanti** - Missing files:
   - Verifica che tutti i file in `pxt.json` esistano
   - Check all files in `pxt.json` exist

2. **Formato pxt.json non valido** - Invalid pxt.json format:
   - Valida la sintassi JSON
   - Validate JSON syntax

3. **Target non supportato** - Unsupported target:
   - Usa `"supportedTargets": ["minecraft"]`
   - Use `"supportedTargets": ["minecraft"]`

4. **Icona mancante** - Missing icon:
   - Includi un file `icon.png` valido
   - Include a valid `icon.png` file

### Soluzioni - Solutions:
- Controlla i log di errore in MakeCode
- Verifica la struttura del pacchetto
- Testa con un progetto MakeCode pulito

## 🎉 Risultato finale - Final result

Il pacchetto `stem-teleporter-v1.0.0.mkcd` è ora pronto per la distribuzione e contiene:

The `stem-teleporter-v1.0.0.mkcd` package is now ready for distribution and contains:

- 🎮 **5 blocchi studenti** per teletrasporto STEM
- 👨‍🏫 **8 blocchi insegnanti** per gestione classe
- 📚 **Documentazione completa** bilingue
- 🔧 **Sistema coordinate personalizzabili**
- ✅ **Pronto per l'installazione** in MakeCode

Il file può essere distribuito e installato facilmente in qualsiasi istanza di MakeCode Minecraft Education Edition!

The file can be easily distributed and installed in any MakeCode Minecraft Education Edition instance!
