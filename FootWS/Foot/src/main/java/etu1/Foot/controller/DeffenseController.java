package etu1.Foot.controller;

import etu1.Foot.service.DeffenseService;
import etu1.Foot.stat.Deffense;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/defense")
public class DeffenseController {
    @Autowired
    DeffenseService serv;

    @PostMapping("/home")
    public List<Deffense> getHome(){
        return serv.getAll("Home");
    }

    @PostMapping("/away")
    public List<Deffense> getAway(){
        return serv.getAll("Away");
    }

    @PostMapping("/overall")
    public List<Deffense> getOverall(){
        return serv.getAll("Overall");
    }
}
