package etu1.Foot.conn;

import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

@Service
public class Connexion {
    public Connection connect() {
        String url = "jdbc:postgresql://localhost:5432/foot";
        String user = "postgres";
        String password = "root";

        Connection conn = null;
        try {
            conn = DriverManager.getConnection(url, user, password);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return conn;
    }
}
