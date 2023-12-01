package etu1.Foot.controller;

import etu1.Foot.service.SummaryService;
import etu1.Foot.stat.Summary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/summary")
public class SummaryController {
    @Autowired
    SummaryService serv;

    @PostMapping("/home")
    public List<Summary> getHome(){
        return serv.getAll("Home");
    }

    @PostMapping("/away")
    public List<Summary> getAway(){
        return serv.getAll("Away");
    }

    @PostMapping("/overall")
    public List<Summary> getOverall(){
        return serv.getAll("Overall");
    }
}
