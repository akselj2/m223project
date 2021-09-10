# M223 Projekt Aksel Jessen

Folgende Schritte sind notwendig um die Applikation zu erstellen und zu starten: 
1. Stellen Sie sicher, dass OpenJDK 11 oder höher installiert und JAVA_HOME korrekt gesetzt ist.  
2. Installieren Sie (falls noch nicht vorhanden) Apache Maven 3.8.1 oder höher
3. Wechseln Sie auf der Kommandozeile in den Ordner dieser Applikation. 
`cd m223-helloworld-quarkus/`
4. Starten Sie die Applikation mit 
```shell script
./mvnw compile quarkus:dev
```

Das Projekt besitzt eine Frontend für das Login, Registrieren und das Erstellen von Entries und auch das Löschen von denen.
Das Backend jedoch fehlt für das Login. Registrieren und das CR(U)D ist auch erstellt.

Swagger API: http://localhost:8080/q/swagger-ui/
