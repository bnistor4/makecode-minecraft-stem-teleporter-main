// Test file for STEM Teleporter extension
// This file can be used to test the extension functionality

// Test basic teleportation functions
function testStudentTeleportation() {
    // Test teleportation to each STEM area
    stemTeleporter.teleportToScience();
    basic.pause(1000);
    
    stemTeleporter.teleportToTechnology();
    basic.pause(1000);
    
    stemTeleporter.teleportToEngineering();
    basic.pause(1000);
    
    stemTeleporter.teleportToMathematics();
    basic.pause(1000);
    
    stemTeleporter.teleportToArts();
}

// Test teacher coordinate setting
function testCoordinateSettings() {
    // Set custom coordinates for each area
    stemTeleporter.setScienceCoordinates(positions.create(150, 70, 150));
    stemTeleporter.setTechnologyCoordinates(positions.create(250, 70, 150));
    stemTeleporter.setEngineeringCoordinates(positions.create(350, 70, 150));
    stemTeleporter.setMathematicsCoordinates(positions.create(450, 70, 150));
    stemTeleporter.setArtsCoordinates(positions.create(550, 70, 150));
}

// Test teacher teleportation functions
function testTeacherFunctions() {
    // Test self-teleportation
    stemTeleporter.teacherTeleportSelf(stemTeleporter.STEMArea.Science);
    basic.pause(2000);
    
    // Test student teleportation
    stemTeleporter.teacherTeleportStudent("Student1", stemTeleporter.STEMArea.Technology);
    basic.pause(1000);
    
    // Test group teleportation
    stemTeleporter.teacherTeleportGroup("Student1,Student2,Student3", stemTeleporter.STEMArea.Engineering);
    basic.pause(1000);
    
    // Test all students teleportation
    stemTeleporter.teacherTeleportAllStudents(stemTeleporter.STEMArea.Mathematics);
}

// Run tests when the extension loads
player.onChat("test-teleporter", function () {
    player.say("Testing STEM Teleporter extension...");
    testCoordinateSettings();
    basic.pause(1000);
    testStudentTeleportation();
    basic.pause(2000);
    testTeacherFunctions();
    player.say("STEM Teleporter tests completed!");
});
