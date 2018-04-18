package posetime.bioskopi;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import posetime.filmovi.Filmovi;

import java.util.List;

@Document(collection = "Bioskopi")

public class Bioskop {

    @Id
    private String id;
    private String naziv;
    private String adresa;
    private String opis;
    private Filmovi repertoar;
    private String brmesta;
    private String admin;

    public String getAdmin() {
        return admin;
    }

    public void setAdmin(String admin) {
        this.admin = admin;
    }

    public Bioskop() {

    }
    public Bioskop(String id, String naziv, String adresa, String opis, Filmovi repertoar, String brmesta){

        this.id=id;
        this.naziv=naziv;
        this.adresa=adresa;
        this.opis=opis;
        this.repertoar=repertoar;
        this.brmesta=brmesta;

    }
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNaziv() {
        return naziv;
    }

    public void setNaziv(String naziv) {
        this.naziv = naziv;
    }

    public String getAdresa() {
        return adresa;
    }

    public void setAdresa(String adresa) {
        this.adresa = adresa;
    }

    public String getOpis() {
        return opis;
    }

    public void setOpis(String opis) {
        this.opis = opis;
    }

    public Filmovi getRepertoar() {
        return repertoar;
    }

    public void setRepertoar(Filmovi repertoar) {
        this.repertoar = repertoar;
    }

    public String getBrmesta() {
        return brmesta;
    }

    public void setBrmesta(String brmesta) {
        this.brmesta = brmesta;
    }



}