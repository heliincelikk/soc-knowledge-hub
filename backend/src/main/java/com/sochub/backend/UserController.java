package com.sochub.backend;

import com.sochub.backend.model.User;
import com.sochub.backend.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    // İşçimizi (Repository) garsona (Controller) tanıtıyoruz
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // 1. Veritabanındaki tüm kullanıcıları listeleyen endpoint
    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll(); // findAll() komutu tüm SQL'i arka planda yazar!
    }

    // 2. Yeni kullanıcı eklemek için test endpoint'i (Bunu tarayıcıdan test
    // edeceğiz)
    @GetMapping("/add-test")
    public String addTestUser() {
        // Yeni bir kullanıcı objesi oluşturuyoruz
        User newUser = new User();
        newUser.setUsername("Junior Hecel");
        newUser.setEmail("hecel@sochub.com");
        newUser.setRole("JUNIOR_ANALYST");

        // İşçimize diyoruz ki: "Al bu kullanıcıyı veritabanına kaydet!"
        userRepository.save(newUser);

        return "BÜYÜK FİNAL! Kullanıcı veritabanına başarıyla eklendi! 🎉";
    }
}
