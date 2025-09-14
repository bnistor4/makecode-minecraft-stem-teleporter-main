//% block="Teletrasporto STEM"
//% color="#4CAF50" icon="\uf0e2" weight=100
namespace stemTeleporter {

    // Predefined STEM area coordinates
    export class STEMCoordinates {
        public static science = positions.create(100, 64, 100);
        public static technology = positions.create(200, 64, 100);
        public static engineering = positions.create(300, 64, 100);
        public static mathematics = positions.create(400, 64, 100);
        public static arts = positions.create(500, 64, 100);
        
        // Custom coordinates that can be modified
        public static customScience = positions.create(100, 64, 100);
        public static customTechnology = positions.create(200, 64, 100);
        public static customEngineering = positions.create(300, 64, 100);
        public static customMathematics = positions.create(400, 64, 100);
        public static customArts = positions.create(500, 64, 100);
    }

    // Studenti organizzati per scuola
    export enum Scuola {
        //% block="Scuola Primaria Leonardo"
        ScuolaPrimariaLeonardo,
        //% block="Scuola Primaria Galilei"
        ScuolaPrimariaGalilei,
        //% block="Scuola Media Marconi"
        ScuolaMediaMarconi,
        //% block="Liceo Scientifico Fermi"
        LiceoScientificoFermi
    }

    // Liste studenti per ogni scuola
    const studentiScuolaPrimariaLeonardo = [
        "Leonardo1", "Leonardo2", "Leonardo3", "Leonardo4", "Leonardo5",
        "Leonardo6", "Leonardo7", "Leonardo8", "Leonardo9", "Leonardo10"
    ];

    const studentiScuolaPrimariaGalilei = [
        "Galilei1", "Galilei2", "Galilei3", "Galilei4", "Galilei5",
        "Galilei6", "Galilei7", "Galilei8", "Galilei9", "Galilei10"
    ];

    const studentiScuolaMediaMarconi = [
        "Marconi1", "Marconi2", "Marconi3", "Marconi4", "Marconi5",
        "Marconi6", "Marconi7", "Marconi8", "Marconi9", "Marconi10"
    ];

    const studentiLiceoScientificoFermi = [
        "Fermi1", "Fermi2", "Fermi3", "Fermi4", "Fermi5",
        "Fermi6", "Fermi7", "Fermi8", "Fermi9", "Fermi10"
    ];

    // Lista completa studenti (per compatibilità)
    const defaultStudents = [
        ...studentiScuolaPrimariaLeonardo,
        ...studentiScuolaPrimariaGalilei,
        ...studentiScuolaMediaMarconi,
        ...studentiLiceoScientificoFermi
    ];

    /**
     * Teleporta il giocatore all'area Scienze - Teleport player to Science area
     */
    //% blockId=stem_teleport_science
    //% block="teletrasporto area Scienze"
    //% group="Studenti"
    //% weight=100
    //% help=github:makecode-minecraft-stem-teleporter/docs/teleport-science
    export function teleportToScience(): void {
        mobs.teleport(mobs.target(TargetSelectorKind.NearestPlayer), STEMCoordinates.customScience);
        player.say("Benvenuto nell'area Scienze!");
    }

    /**
     * Teleporta il giocatore all'area Tecnologia - Teleport player to Technology area
     */
    //% blockId=stem_teleport_technology
    //% block="teletrasporto area Tecnologia"
    //% group="Studenti"
    //% weight=95
    //% help=github:makecode-minecraft-stem-teleporter/docs/teleport-technology
    export function teleportToTechnology(): void {
        mobs.teleport(mobs.target(TargetSelectorKind.NearestPlayer), STEMCoordinates.customTechnology);
        player.say("Benvenuto nell'area Tecnologia!");
    }

    /**
     * Teleporta il giocatore all'area Ingegneria - Teleport player to Engineering area
     */
    //% blockId=stem_teleport_engineering
    //% block="teletrasporto area Ingegneria"
    //% group="Studenti"
    //% weight=90
    //% help=github:makecode-minecraft-stem-teleporter/docs/teleport-engineering
    export function teleportToEngineering(): void {
        mobs.teleport(mobs.target(TargetSelectorKind.NearestPlayer), STEMCoordinates.customEngineering);
        player.say("Benvenuto nell'area Ingegneria!");
    }

    /**
     * Teleporta il giocatore all'area Matematica - Teleport player to Mathematics area
     */
    //% blockId=stem_teleport_mathematics
    //% block="teletrasporto area Matematica"
    //% group="Studenti"
    //% weight=85
    //% help=github:makecode-minecraft-stem-teleporter/docs/teleport-mathematics
    export function teleportToMathematics(): void {
        mobs.teleport(mobs.target(TargetSelectorKind.NearestPlayer), STEMCoordinates.customMathematics);
        player.say("Benvenuto nell'area Matematica!");
    }

    /**
     * Teleporta il giocatore all'area Arte - Teleport player to Arts area
     */
    //% blockId=stem_teleport_arts
    //% block="teletrasporto area Arte"
    //% group="Studenti"
    //% weight=80
    //% help=github:makecode-minecraft-stem-teleporter/docs/teleport-arts
    export function teleportToArts(): void {
        mobs.teleport(mobs.target(TargetSelectorKind.NearestPlayer), STEMCoordinates.customArts);
        player.say("Benvenuto nell'area Arte!");
    }

    /**
     * Imposta coordinate personalizzate per l'area Scienze - Set custom coordinates for Science area
     * @param position la nuova posizione per l'area Scienze - the new position for Science area
     */
    //% blockId=stem_set_science_coords
    //% block="imposta coordinate Scienze $position"
    //% position.shadow=minecraftCreatePosition
    //% group="Insegnanti"
    //% weight=70
    //% help=github:makecode-minecraft-stem-teleporter/docs/set-stem-coordinates
    export function setScienceCoordinates(position: Position): void {
        STEMCoordinates.customScience = position;
        player.say("Coordinate area Scienze aggiornate!");
    }

    /**
     * Imposta coordinate personalizzate per l'area Tecnologia - Set custom coordinates for Technology area
     * @param position la nuova posizione per l'area Tecnologia - the new position for Technology area
     */
    //% blockId=stem_set_technology_coords
    //% block="imposta coordinate Tecnologia $position"
    //% position.shadow=minecraftCreatePosition
    //% group="Insegnanti"
    //% weight=65
    //% help=github:makecode-minecraft-stem-teleporter/docs/set-stem-coordinates
    export function setTechnologyCoordinates(position: Position): void {
        STEMCoordinates.customTechnology = position;
        player.say("Coordinate area Tecnologia aggiornate!");
    }

    /**
     * Imposta coordinate personalizzate per l'area Ingegneria - Set custom coordinates for Engineering area
     * @param position la nuova posizione per l'area Ingegneria - the new position for Engineering area
     */
    //% blockId=stem_set_engineering_coords
    //% block="imposta coordinate Ingegneria $position"
    //% position.shadow=minecraftCreatePosition
    //% group="Insegnanti"
    //% weight=60
    //% help=github:makecode-minecraft-stem-teleporter/docs/set-stem-coordinates
    export function setEngineeringCoordinates(position: Position): void {
        STEMCoordinates.customEngineering = position;
        player.say("Coordinate area Ingegneria aggiornate!");
    }

    /**
     * Imposta coordinate personalizzate per l'area Matematica - Set custom coordinates for Mathematics area
     * @param position la nuova posizione per l'area Matematica - the new position for Mathematics area
     */
    //% blockId=stem_set_mathematics_coords
    //% block="imposta coordinate Matematica $position"
    //% position.shadow=minecraftCreatePosition
    //% group="Insegnanti"
    //% weight=55
    //% help=github:makecode-minecraft-stem-teleporter/docs/set-stem-coordinates
    export function setMathematicsCoordinates(position: Position): void {
        STEMCoordinates.customMathematics = position;
        player.say("Coordinate area Matematica aggiornate!");
    }

    /**
     * Imposta coordinate personalizzate per l'area Arte - Set custom coordinates for Arts area
     * @param position la nuova posizione per l'area Arte - the new position for Arts area
     */
    //% blockId=stem_set_arts_coords
    //% block="imposta coordinate Arte $position"
    //% position.shadow=minecraftCreatePosition
    //% group="Insegnanti"
    //% weight=50
    //% help=github:makecode-minecraft-stem-teleporter/docs/set-stem-coordinates
    export function setArtsCoordinates(position: Position): void {
        STEMCoordinates.customArts = position;
        player.say("Coordinate area Arte aggiornate!");
    }

    /**
     * Enum per le aree STEM - Enum for STEM areas
     */
    export enum STEMArea {
        //% block="Scienze"
        Science,
        //% block="Tecnologia"
        Technology,
        //% block="Ingegneria"
        Engineering,
        //% block="Matematica"
        Mathematics,
        //% block="Arte"
        Arts
    }

    /**
     * Teletrasporta l'insegnante a un'area STEM specifica - Teleport teacher to specific STEM area
     * @param area l'area STEM di destinazione - the target STEM area
     */
    //% blockId=stem_teacher_teleport_self
    //% block="insegnante teletrasportati in area $area"
    //% group="Insegnanti"
    //% weight=45
    //% help=github:makecode-minecraft-stem-teleporter/docs/teacher-teleport-self
    export function teacherTeleportSelf(area: STEMArea): void {
        let destination: Position;
        let areaName: string;
        
        switch (area) {
            case STEMArea.Science:
                destination = STEMCoordinates.customScience;
                areaName = "Scienze";
                break;
            case STEMArea.Technology:
                destination = STEMCoordinates.customTechnology;
                areaName = "Tecnologia";
                break;
            case STEMArea.Engineering:
                destination = STEMCoordinates.customEngineering;
                areaName = "Ingegneria";
                break;
            case STEMArea.Mathematics:
                destination = STEMCoordinates.customMathematics;
                areaName = "Matematica";
                break;
            case STEMArea.Arts:
                destination = STEMCoordinates.customArts;
                areaName = "Arte";
                break;
            default:
                destination = STEMCoordinates.customScience;
                areaName = "Scienze";
        }
        
        mobs.teleport(mobs.target(TargetSelectorKind.NearestPlayer), destination);
        player.say("Insegnante teletrasportato in area " + areaName + "!");
    }

    /**
     * Teletrasporta uno studente specifico a un'area STEM - Teleport specific student to STEM area
     * @param studentName nome dello studente - student name
     * @param area l'area STEM di destinazione - the target STEM area
     */
    //% blockId=stem_teacher_teleport_student
    //% block="teletrasporta studente $studentName in area $area"
    //% studentName.defl="Student1"
    //% group="Insegnanti"
    //% weight=40
    //% help=github:makecode-minecraft-stem-teleporter/docs/teacher-teleport-student
    export function teacherTeleportStudent(studentName: string, area: STEMArea): void {
        let destination: Position;
        let areaName: string;
        
        switch (area) {
            case STEMArea.Science:
                destination = STEMCoordinates.customScience;
                areaName = "Scienze";
                break;
            case STEMArea.Technology:
                destination = STEMCoordinates.customTechnology;
                areaName = "Tecnologia";
                break;
            case STEMArea.Engineering:
                destination = STEMCoordinates.customEngineering;
                areaName = "Ingegneria";
                break;
            case STEMArea.Mathematics:
                destination = STEMCoordinates.customMathematics;
                areaName = "Matematica";
                break;
            case STEMArea.Arts:
                destination = STEMCoordinates.customArts;
                areaName = "Arte";
                break;
            default:
                destination = STEMCoordinates.customScience;
                areaName = "Scienze";
        }
        
        // Use execute command to teleport specific player
        player.execute("tp " + studentName + " " + 
                      destination.getValue(Axis.X) + " " + 
                      destination.getValue(Axis.Y) + " " + 
                      destination.getValue(Axis.Z));
        
        player.say("Studente " + studentName + " teletrasportato in area " + areaName + "!");
    }

    /**
     * Teletrasporta tutti gli studenti predefiniti a un'area STEM - Teleport all default students to STEM area
     * @param area l'area STEM di destinazione - the target STEM area
     */
    //% blockId=stem_teacher_teleport_all_students
    //% block="teletrasporta tutti gli studenti in area $area"
    //% group="Insegnanti"
    //% weight=35
    //% help=github:makecode-minecraft-stem-teleporter/docs/teacher-teleport-group
    export function teacherTeleportAllStudents(area: STEMArea): void {
        let destination: Position;
        let areaName: string;
        
        switch (area) {
            case STEMArea.Science:
                destination = STEMCoordinates.customScience;
                areaName = "Scienze";
                break;
            case STEMArea.Technology:
                destination = STEMCoordinates.customTechnology;
                areaName = "Tecnologia";
                break;
            case STEMArea.Engineering:
                destination = STEMCoordinates.customEngineering;
                areaName = "Ingegneria";
                break;
            case STEMArea.Mathematics:
                destination = STEMCoordinates.customMathematics;
                areaName = "Matematica";
                break;
            case STEMArea.Arts:
                destination = STEMCoordinates.customArts;
                areaName = "Arte";
                break;
            default:
                destination = STEMCoordinates.customScience;
                areaName = "Scienze";
        }
        
        // Teleport each default student
        for (let student of defaultStudents) {
            player.execute("tp " + student + " " + 
                          destination.getValue(Axis.X) + " " + 
                          destination.getValue(Axis.Y) + " " + 
                          destination.getValue(Axis.Z));
        }
        
        player.say("Tutti gli studenti teletrasportati in area " + areaName + "!");
    }

    /**
     * Teletrasporta un gruppo di studenti a un'area STEM - Teleport group of students to STEM area
     * @param students lista di nomi studenti separati da virgola - comma-separated list of student names
     * @param area l'area STEM di destinazione - the target STEM area
     */
    //% blockId=stem_teacher_teleport_group
    //% block="teletrasporta gruppo $students in area $area"
    //% students.defl="Student1,Student2,Student3"
    //% group="Insegnanti"
    //% weight=30
    //% help=github:makecode-minecraft-stem-teleporter/docs/teacher-teleport-group
    export function teacherTeleportGroup(students: string, area: STEMArea): void {
        let destination: Position;
        let areaName: string;
        
        switch (area) {
            case STEMArea.Science:
                destination = STEMCoordinates.customScience;
                areaName = "Scienze";
                break;
            case STEMArea.Technology:
                destination = STEMCoordinates.customTechnology;
                areaName = "Tecnologia";
                break;
            case STEMArea.Engineering:
                destination = STEMCoordinates.customEngineering;
                areaName = "Ingegneria";
                break;
            case STEMArea.Mathematics:
                destination = STEMCoordinates.customMathematics;
                areaName = "Matematica";
                break;
            case STEMArea.Arts:
                destination = STEMCoordinates.customArts;
                areaName = "Arte";
                break;
            default:
                destination = STEMCoordinates.customScience;
                areaName = "Scienze";
        }
        
        // Split student names and teleport each one
        let studentList = students.split(",");
        for (let student of studentList) {
            let trimmedName = student.trim();
            if (trimmedName.length > 0) {
                player.execute("tp " + trimmedName + " " + 
                              destination.getValue(Axis.X) + " " + 
                              destination.getValue(Axis.Y) + " " + 
                              destination.getValue(Axis.Z));
            }
        }
        
        player.say("Gruppo di studenti teletrasportato in area " + areaName + "!");
    }

    /**
     * Teletrasporta tutti i giocatori online a un'area STEM - Teleport all online players to STEM area
     * @param area l'area STEM di destinazione - the target STEM area
     */
    //% blockId=stem_teacher_teleport_all_players
    //% block="teletrasporta tutti i giocatori in area $area"
    //% group="Insegnanti"
    //% weight=25
    //% help=github:makecode-minecraft-stem-teleporter/docs/teacher-teleport-all
    export function teacherTeleportAllPlayers(area: STEMArea): void {
        let destination: Position;
        let areaName: string;
        
        switch (area) {
            case STEMArea.Science:
                destination = STEMCoordinates.customScience;
                areaName = "Scienze";
                break;
            case STEMArea.Technology:
                destination = STEMCoordinates.customTechnology;
                areaName = "Tecnologia";
                break;
            case STEMArea.Engineering:
                destination = STEMCoordinates.customEngineering;
                areaName = "Ingegneria";
                break;
            case STEMArea.Mathematics:
                destination = STEMCoordinates.customMathematics;
                areaName = "Matematica";
                break;
            case STEMArea.Arts:
                destination = STEMCoordinates.customArts;
                areaName = "Arte";
                break;
            default:
                destination = STEMCoordinates.customScience;
                areaName = "Scienze";
        }
        
        // Use @a selector to teleport all players
        player.execute("tp @a " + 
                      destination.getValue(Axis.X) + " " + 
                      destination.getValue(Axis.Y) + " " + 
                      destination.getValue(Axis.Z));
        
        player.say("Tutti i giocatori teletrasportati in area " + areaName + "!");
    }

    /**
     * Funzione helper per ottenere la lista studenti di una scuola
     * @param scuola la scuola selezionata
     * @returns array con i nomi degli studenti
     */
    function getStudentiByScuola(scuola: Scuola): string[] {
        switch (scuola) {
            case Scuola.ScuolaPrimariaLeonardo:
                return studentiScuolaPrimariaLeonardo;
            case Scuola.ScuolaPrimariaGalilei:
                return studentiScuolaPrimariaGalilei;
            case Scuola.ScuolaMediaMarconi:
                return studentiScuolaMediaMarconi;
            case Scuola.LiceoScientificoFermi:
                return studentiLiceoScientificoFermi;
            default:
                return studentiScuolaPrimariaLeonardo;
        }
    }

    /**
     * Funzione helper per ottenere il nome della scuola
     * @param scuola la scuola selezionata
     * @returns nome della scuola
     */
    function getNomeScuola(scuola: Scuola): string {
        switch (scuola) {
            case Scuola.ScuolaPrimariaLeonardo:
                return "Scuola Primaria Leonardo";
            case Scuola.ScuolaPrimariaGalilei:
                return "Scuola Primaria Galilei";
            case Scuola.ScuolaMediaMarconi:
                return "Scuola Media Marconi";
            case Scuola.LiceoScientificoFermi:
                return "Liceo Scientifico Fermi";
            default:
                return "Scuola Primaria Leonardo";
        }
    }

    /**
     * Teletrasporta tutti gli studenti di una scuola specifica a un'area STEM
     * @param scuola la scuola degli studenti da teletrasportare
     * @param area l'area STEM di destinazione
     */
    //% blockId=stem_teacher_teleport_school
    //% block="teletrasporta studenti di $scuola in area $area"
    //% group="Insegnanti"
    //% weight=20
    //% help=github:makecode-minecraft-stem-teleporter/docs/teacher-teleport-school
    export function teacherTeleportSchool(scuola: Scuola, area: STEMArea): void {
        let destination: Position;
        let areaName: string;
        
        switch (area) {
            case STEMArea.Science:
                destination = STEMCoordinates.customScience;
                areaName = "Scienze";
                break;
            case STEMArea.Technology:
                destination = STEMCoordinates.customTechnology;
                areaName = "Tecnologia";
                break;
            case STEMArea.Engineering:
                destination = STEMCoordinates.customEngineering;
                areaName = "Ingegneria";
                break;
            case STEMArea.Mathematics:
                destination = STEMCoordinates.customMathematics;
                areaName = "Matematica";
                break;
            case STEMArea.Arts:
                destination = STEMCoordinates.customArts;
                areaName = "Arte";
                break;
            default:
                destination = STEMCoordinates.customScience;
                areaName = "Scienze";
        }
        
        // Ottieni lista studenti della scuola
        let studentiScuola = getStudentiByScuola(scuola);
        let nomeScuola = getNomeScuola(scuola);
        
        // Teletrasporta ogni studente della scuola
        for (let studente of studentiScuola) {
            player.execute("tp " + studente + " " + 
                          destination.getValue(Axis.X) + " " + 
                          destination.getValue(Axis.Y) + " " + 
                          destination.getValue(Axis.Z));
        }
        
        player.say("Studenti di " + nomeScuola + " teletrasportati in area " + areaName + "!");
    }

    /**
     * Teletrasporta uno studente specifico di una scuola a un'area STEM
     * @param scuola la scuola dello studente
     * @param numeroStudente il numero dello studente (1-10)
     * @param area l'area STEM di destinazione
     */
    //% blockId=stem_teacher_teleport_student_by_school
    //% block="teletrasporta studente numero $numeroStudente di $scuola in area $area"
    //% numeroStudente.min=1 numeroStudente.max=10 numeroStudente.defl=1
    //% group="Insegnanti"
    //% weight=15
    //% help=github:makecode-minecraft-stem-teleporter/docs/teacher-teleport-student-school
    export function teacherTeleportStudentBySchool(scuola: Scuola, numeroStudente: number, area: STEMArea): void {
        let destination: Position;
        let areaName: string;
        
        switch (area) {
            case STEMArea.Science:
                destination = STEMCoordinates.customScience;
                areaName = "Scienze";
                break;
            case STEMArea.Technology:
                destination = STEMCoordinates.customTechnology;
                areaName = "Tecnologia";
                break;
            case STEMArea.Engineering:
                destination = STEMCoordinates.customEngineering;
                areaName = "Ingegneria";
                break;
            case STEMArea.Mathematics:
                destination = STEMCoordinates.customMathematics;
                areaName = "Matematica";
                break;
            case STEMArea.Arts:
                destination = STEMCoordinates.customArts;
                areaName = "Arte";
                break;
            default:
                destination = STEMCoordinates.customScience;
                areaName = "Scienze";
        }
        
        // Ottieni lista studenti della scuola
        let studentiScuola = getStudentiByScuola(scuola);
        let nomeScuola = getNomeScuola(scuola);
        
        // Verifica che il numero studente sia valido
        if (numeroStudente >= 1 && numeroStudente <= studentiScuola.length) {
            let nomeStudente = studentiScuola[numeroStudente - 1]; // Array è 0-based
            
            player.execute("tp " + nomeStudente + " " + 
                          destination.getValue(Axis.X) + " " + 
                          destination.getValue(Axis.Y) + " " + 
                          destination.getValue(Axis.Z));
            
            player.say("Studente " + nomeStudente + " di " + nomeScuola + " teletrasportato in area " + areaName + "!");
        } else {
            player.say("Numero studente non valido! Usa numeri da 1 a " + studentiScuola.length);
        }
    }

    /**
     * Mostra la lista degli studenti di una scuola
     * @param scuola la scuola di cui mostrare gli studenti
     */
    //% blockId=stem_show_school_students
    //% block="mostra studenti di $scuola"
    //% group="Insegnanti"
    //% weight=10
    //% help=github:makecode-minecraft-stem-teleporter/docs/show-school-students
    export function showSchoolStudents(scuola: Scuola): void {
        let studentiScuola = getStudentiByScuola(scuola);
        let nomeScuola = getNomeScuola(scuola);
        
        player.say("=== " + nomeScuola + " ===");
        for (let i = 0; i < studentiScuola.length; i++) {
            player.say((i + 1) + ". " + studentiScuola[i]);
        }
    }
}
