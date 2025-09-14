//% block="STEM Teleporter"
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

    // Default student usernames for teachers to teleport
    const defaultStudents = [
        "Student1", "Student2", "Student3", "Student4", "Student5",
        "Student6", "Student7", "Student8", "Student9", "Student10",
        "Studente1", "Studente2", "Studente3", "Studente4", "Studente5",
        "Alunno1", "Alunno2", "Alunno3", "Alunno4", "Alunno5"
    ];

    /**
     * Teleporta il giocatore all'area Scienze - Teleport player to Science area
     */
    //% blockId=stem_teleport_science
    //% block="teletrasporto area Scienze|teleport to Science area"
    //% group="Studenti - Students"
    //% weight=100
    //% help=github:makecode-minecraft-stem-teleporter/docs/teleport-science
    export function teleportToScience(): void {
        mobs.teleport(mobs.target(TargetSelectorKind.NearestPlayer), STEMCoordinates.customScience);
        player.say("Benvenuto nell'area Scienze! - Welcome to Science area!");
    }

    /**
     * Teleporta il giocatore all'area Tecnologia - Teleport player to Technology area
     */
    //% blockId=stem_teleport_technology
    //% block="teletrasporto area Tecnologia|teleport to Technology area"
    //% group="Studenti - Students"
    //% weight=95
    //% help=github:makecode-minecraft-stem-teleporter/docs/teleport-technology
    export function teleportToTechnology(): void {
        mobs.teleport(mobs.target(TargetSelectorKind.NearestPlayer), STEMCoordinates.customTechnology);
        player.say("Benvenuto nell'area Tecnologia! - Welcome to Technology area!");
    }

    /**
     * Teleporta il giocatore all'area Ingegneria - Teleport player to Engineering area
     */
    //% blockId=stem_teleport_engineering
    //% block="teletrasporto area Ingegneria|teleport to Engineering area"
    //% group="Studenti - Students"
    //% weight=90
    //% help=github:makecode-minecraft-stem-teleporter/docs/teleport-engineering
    export function teleportToEngineering(): void {
        mobs.teleport(mobs.target(TargetSelectorKind.NearestPlayer), STEMCoordinates.customEngineering);
        player.say("Benvenuto nell'area Ingegneria! - Welcome to Engineering area!");
    }

    /**
     * Teleporta il giocatore all'area Matematica - Teleport player to Mathematics area
     */
    //% blockId=stem_teleport_mathematics
    //% block="teletrasporto area Matematica|teleport to Mathematics area"
    //% group="Studenti - Students"
    //% weight=85
    //% help=github:makecode-minecraft-stem-teleporter/docs/teleport-mathematics
    export function teleportToMathematics(): void {
        mobs.teleport(mobs.target(TargetSelectorKind.NearestPlayer), STEMCoordinates.customMathematics);
        player.say("Benvenuto nell'area Matematica! - Welcome to Mathematics area!");
    }

    /**
     * Teleporta il giocatore all'area Arte - Teleport player to Arts area
     */
    //% blockId=stem_teleport_arts
    //% block="teletrasporto area Arte|teleport to Arts area"
    //% group="Studenti - Students"
    //% weight=80
    //% help=github:makecode-minecraft-stem-teleporter/docs/teleport-arts
    export function teleportToArts(): void {
        mobs.teleport(mobs.target(TargetSelectorKind.NearestPlayer), STEMCoordinates.customArts);
        player.say("Benvenuto nell'area Arte! - Welcome to Arts area!");
    }

    /**
     * Imposta coordinate personalizzate per l'area Scienze - Set custom coordinates for Science area
     * @param position la nuova posizione per l'area Scienze - the new position for Science area
     */
    //% blockId=stem_set_science_coords
    //% block="imposta coordinate Scienze|set Science coordinates to $position"
    //% position.shadow=minecraftCreatePosition
    //% group="Insegnanti - Teachers"
    //% weight=70
    //% help=github:makecode-minecraft-stem-teleporter/docs/set-stem-coordinates
    export function setScienceCoordinates(position: Position): void {
        STEMCoordinates.customScience = position;
        player.say("Coordinate area Scienze aggiornate! - Science area coordinates updated!");
    }

    /**
     * Imposta coordinate personalizzate per l'area Tecnologia - Set custom coordinates for Technology area
     * @param position la nuova posizione per l'area Tecnologia - the new position for Technology area
     */
    //% blockId=stem_set_technology_coords
    //% block="imposta coordinate Tecnologia|set Technology coordinates to $position"
    //% position.shadow=minecraftCreatePosition
    //% group="Insegnanti - Teachers"
    //% weight=65
    //% help=github:makecode-minecraft-stem-teleporter/docs/set-stem-coordinates
    export function setTechnologyCoordinates(position: Position): void {
        STEMCoordinates.customTechnology = position;
        player.say("Coordinate area Tecnologia aggiornate! - Technology area coordinates updated!");
    }

    /**
     * Imposta coordinate personalizzate per l'area Ingegneria - Set custom coordinates for Engineering area
     * @param position la nuova posizione per l'area Ingegneria - the new position for Engineering area
     */
    //% blockId=stem_set_engineering_coords
    //% block="imposta coordinate Ingegneria|set Engineering coordinates to $position"
    //% position.shadow=minecraftCreatePosition
    //% group="Insegnanti - Teachers"
    //% weight=60
    //% help=github:makecode-minecraft-stem-teleporter/docs/set-stem-coordinates
    export function setEngineeringCoordinates(position: Position): void {
        STEMCoordinates.customEngineering = position;
        player.say("Coordinate area Ingegneria aggiornate! - Engineering area coordinates updated!");
    }

    /**
     * Imposta coordinate personalizzate per l'area Matematica - Set custom coordinates for Mathematics area
     * @param position la nuova posizione per l'area Matematica - the new position for Mathematics area
     */
    //% blockId=stem_set_mathematics_coords
    //% block="imposta coordinate Matematica|set Mathematics coordinates to $position"
    //% position.shadow=minecraftCreatePosition
    //% group="Insegnanti - Teachers"
    //% weight=55
    //% help=github:makecode-minecraft-stem-teleporter/docs/set-stem-coordinates
    export function setMathematicsCoordinates(position: Position): void {
        STEMCoordinates.customMathematics = position;
        player.say("Coordinate area Matematica aggiornate! - Mathematics area coordinates updated!");
    }

    /**
     * Imposta coordinate personalizzate per l'area Arte - Set custom coordinates for Arts area
     * @param position la nuova posizione per l'area Arte - the new position for Arts area
     */
    //% blockId=stem_set_arts_coords
    //% block="imposta coordinate Arte|set Arts coordinates to $position"
    //% position.shadow=minecraftCreatePosition
    //% group="Insegnanti - Teachers"
    //% weight=50
    //% help=github:makecode-minecraft-stem-teleporter/docs/set-stem-coordinates
    export function setArtsCoordinates(position: Position): void {
        STEMCoordinates.customArts = position;
        player.say("Coordinate area Arte aggiornate! - Arts area coordinates updated!");
    }

    /**
     * Enum per le aree STEM - Enum for STEM areas
     */
    export enum STEMArea {
        //% block="Scienze - Science"
        Science,
        //% block="Tecnologia - Technology"
        Technology,
        //% block="Ingegneria - Engineering"
        Engineering,
        //% block="Matematica - Mathematics"
        Mathematics,
        //% block="Arte - Arts"
        Arts
    }

    /**
     * Teletrasporta l'insegnante a un'area STEM specifica - Teleport teacher to specific STEM area
     * @param area l'area STEM di destinazione - the target STEM area
     */
    //% blockId=stem_teacher_teleport_self
    //% block="insegnante teletrasportati|teacher teleport yourself to $area"
    //% group="Insegnanti - Teachers"
    //% weight=45
    //% help=github:makecode-minecraft-stem-teleporter/docs/teacher-teleport-self
    export function teacherTeleportSelf(area: STEMArea): void {
        let destination: Position;
        let areaName: string;
        
        switch (area) {
            case STEMArea.Science:
                destination = STEMCoordinates.customScience;
                areaName = "Scienze - Science";
                break;
            case STEMArea.Technology:
                destination = STEMCoordinates.customTechnology;
                areaName = "Tecnologia - Technology";
                break;
            case STEMArea.Engineering:
                destination = STEMCoordinates.customEngineering;
                areaName = "Ingegneria - Engineering";
                break;
            case STEMArea.Mathematics:
                destination = STEMCoordinates.customMathematics;
                areaName = "Matematica - Mathematics";
                break;
            case STEMArea.Arts:
                destination = STEMCoordinates.customArts;
                areaName = "Arte - Arts";
                break;
            default:
                destination = STEMCoordinates.customScience;
                areaName = "Scienze - Science";
        }
        
        mobs.teleport(mobs.target(TargetSelectorKind.NearestPlayer), destination);
        player.say("Insegnante teletrasportato in area " + areaName + "! - Teacher teleported to " + areaName + " area!");
    }

    /**
     * Teletrasporta uno studente specifico a un'area STEM - Teleport specific student to STEM area
     * @param studentName nome dello studente - student name
     * @param area l'area STEM di destinazione - the target STEM area
     */
    //% blockId=stem_teacher_teleport_student
    //% block="teletrasporta studente|teleport student $studentName to $area"
    //% studentName.defl="Student1"
    //% group="Insegnanti - Teachers"
    //% weight=40
    //% help=github:makecode-minecraft-stem-teleporter/docs/teacher-teleport-student
    export function teacherTeleportStudent(studentName: string, area: STEMArea): void {
        let destination: Position;
        let areaName: string;
        
        switch (area) {
            case STEMArea.Science:
                destination = STEMCoordinates.customScience;
                areaName = "Scienze - Science";
                break;
            case STEMArea.Technology:
                destination = STEMCoordinates.customTechnology;
                areaName = "Tecnologia - Technology";
                break;
            case STEMArea.Engineering:
                destination = STEMCoordinates.customEngineering;
                areaName = "Ingegneria - Engineering";
                break;
            case STEMArea.Mathematics:
                destination = STEMCoordinates.customMathematics;
                areaName = "Matematica - Mathematics";
                break;
            case STEMArea.Arts:
                destination = STEMCoordinates.customArts;
                areaName = "Arte - Arts";
                break;
            default:
                destination = STEMCoordinates.customScience;
                areaName = "Scienze - Science";
        }
        
        // Use execute command to teleport specific player
        player.execute("tp " + studentName + " " + 
                      destination.getValue(Axis.X) + " " + 
                      destination.getValue(Axis.Y) + " " + 
                      destination.getValue(Axis.Z));
        
        player.say("Studente " + studentName + " teletrasportato in area " + areaName + "! - Student " + studentName + " teleported to " + areaName + " area!");
    }

    /**
     * Teletrasporta tutti gli studenti predefiniti a un'area STEM - Teleport all default students to STEM area
     * @param area l'area STEM di destinazione - the target STEM area
     */
    //% blockId=stem_teacher_teleport_all_students
    //% block="teletrasporta tutti gli studenti|teleport all students to $area"
    //% group="Insegnanti - Teachers"
    //% weight=35
    //% help=github:makecode-minecraft-stem-teleporter/docs/teacher-teleport-group
    export function teacherTeleportAllStudents(area: STEMArea): void {
        let destination: Position;
        let areaName: string;
        
        switch (area) {
            case STEMArea.Science:
                destination = STEMCoordinates.customScience;
                areaName = "Scienze - Science";
                break;
            case STEMArea.Technology:
                destination = STEMCoordinates.customTechnology;
                areaName = "Tecnologia - Technology";
                break;
            case STEMArea.Engineering:
                destination = STEMCoordinates.customEngineering;
                areaName = "Ingegneria - Engineering";
                break;
            case STEMArea.Mathematics:
                destination = STEMCoordinates.customMathematics;
                areaName = "Matematica - Mathematics";
                break;
            case STEMArea.Arts:
                destination = STEMCoordinates.customArts;
                areaName = "Arte - Arts";
                break;
            default:
                destination = STEMCoordinates.customScience;
                areaName = "Scienze - Science";
        }
        
        // Teleport each default student
        for (let student of defaultStudents) {
            player.execute("tp " + student + " " + 
                          destination.getValue(Axis.X) + " " + 
                          destination.getValue(Axis.Y) + " " + 
                          destination.getValue(Axis.Z));
        }
        
        player.say("Tutti gli studenti teletrasportati in area " + areaName + "! - All students teleported to " + areaName + " area!");
    }

    /**
     * Teletrasporta un gruppo di studenti a un'area STEM - Teleport group of students to STEM area
     * @param students lista di nomi studenti separati da virgola - comma-separated list of student names
     * @param area l'area STEM di destinazione - the target STEM area
     */
    //% blockId=stem_teacher_teleport_group
    //% block="teletrasporta gruppo|teleport group $students to $area"
    //% students.defl="Student1,Student2,Student3"
    //% group="Insegnanti - Teachers"
    //% weight=30
    //% help=github:makecode-minecraft-stem-teleporter/docs/teacher-teleport-group
    export function teacherTeleportGroup(students: string, area: STEMArea): void {
        let destination: Position;
        let areaName: string;
        
        switch (area) {
            case STEMArea.Science:
                destination = STEMCoordinates.customScience;
                areaName = "Scienze - Science";
                break;
            case STEMArea.Technology:
                destination = STEMCoordinates.customTechnology;
                areaName = "Tecnologia - Technology";
                break;
            case STEMArea.Engineering:
                destination = STEMCoordinates.customEngineering;
                areaName = "Ingegneria - Engineering";
                break;
            case STEMArea.Mathematics:
                destination = STEMCoordinates.customMathematics;
                areaName = "Matematica - Mathematics";
                break;
            case STEMArea.Arts:
                destination = STEMCoordinates.customArts;
                areaName = "Arte - Arts";
                break;
            default:
                destination = STEMCoordinates.customScience;
                areaName = "Scienze - Science";
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
        
        player.say("Gruppo di studenti teletrasportato in area " + areaName + "! - Group of students teleported to " + areaName + " area!");
    }

    /**
     * Teletrasporta tutti i giocatori online a un'area STEM - Teleport all online players to STEM area
     * @param area l'area STEM di destinazione - the target STEM area
     */
    //% blockId=stem_teacher_teleport_all_players
    //% block="teletrasporta tutti i giocatori|teleport all players to $area"
    //% group="Insegnanti - Teachers"
    //% weight=25
    //% help=github:makecode-minecraft-stem-teleporter/docs/teacher-teleport-all
    export function teacherTeleportAllPlayers(area: STEMArea): void {
        let destination: Position;
        let areaName: string;
        
        switch (area) {
            case STEMArea.Science:
                destination = STEMCoordinates.customScience;
                areaName = "Scienze - Science";
                break;
            case STEMArea.Technology:
                destination = STEMCoordinates.customTechnology;
                areaName = "Tecnologia - Technology";
                break;
            case STEMArea.Engineering:
                destination = STEMCoordinates.customEngineering;
                areaName = "Ingegneria - Engineering";
                break;
            case STEMArea.Mathematics:
                destination = STEMCoordinates.customMathematics;
                areaName = "Matematica - Mathematics";
                break;
            case STEMArea.Arts:
                destination = STEMCoordinates.customArts;
                areaName = "Arte - Arts";
                break;
            default:
                destination = STEMCoordinates.customScience;
                areaName = "Scienze - Science";
        }
        
        // Use @a selector to teleport all players
        player.execute("tp @a " + 
                      destination.getValue(Axis.X) + " " + 
                      destination.getValue(Axis.Y) + " " + 
                      destination.getValue(Axis.Z));
        
        player.say("Tutti i giocatori teletrasportati in area " + areaName + "! - All players teleported to " + areaName + " area!");
    }
}
