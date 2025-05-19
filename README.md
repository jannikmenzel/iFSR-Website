<img width="2140" alt="Homepage" src="https://github.com/user-attachments/assets/ffe7c42e-9345-467d-9fe9-852ea6818704" />

# iFSR Website – TU Dresden

Dies ist die offizielle Website des iFSR (Informatik-Fachschaftsrat) der Technischen Universität Dresden. Die Seite wurde mit dem statischen Website-Generator [Hugo](https://gohugo.io/) erstellt und dient als zentrale Informationsplattform für Studierende der Fakultät Informatik.

## 🔧 Technologien

- **Framework:** [Hugo](https://gohugo.io/) – statischer Site-Generator
- **CSS-Framework:** [Bootstrap](https://getbootstrap.com/) – responsives Frontend-Toolkit

## 🚀 Schnellstart

### Hugo installieren

```bash
# macOS / Linux (mit Homebrew)
brew install hugo

# Windows (mit Chocolatey)
choco install hugo -y
```

Weitere Informationen: [https://gohugo.io/getting-started/installing/](https://gohugo.io/getting-started/installing/)

### Projekt klonen und lokal starten

```bash
git clone git@github.com:jannikmenzel/iFSR-Website.git
cd iFSR-Website

# Alias für die lokale Entwicklungsumgebung
alias hugodev='hugo server --disableFastRender --ignoreCache --noHTTPCache --cleanDestinationDir'

hugodev
```

Anschließend kannst du die Website im Browser unter [http://localhost:1313](http://localhost:1313) aufrufen.

## 📁 Projektstruktur

- `content/` – Inhalte der Website (Seiten im Markdown Format)
- `layouts/` – Individuelle Layouts und Templates
- `static/` – Statische Dateien (z.B. Bilder, PDFs)
- `assets/` – CSS, JavaScript Dateien und Images
- `data/` – Navigation Config-Datei
- `hugo.toml` – Hauptkonfigurationsdatei für Hugo

## 💡 Entwicklungs-Hinweise

### Neue Seite anlegen (inkl. Navbar)

1. Erstelle eine neue Markdown-Datei im passenden Unterordner innerhalb von `content/`, z.B.:

    ```bash
    content/about/team.md
    ```

2. Füge in der Datei ein Front-Matter hinzu:

    ```toml
    +++
    title = "Team"
    +++
    ```

3. Trage die Seite in der Navigationsstruktur ein, indem du sie in `data/navigation.toml` ergänzt:

    ```toml
    [[menu.main]]
    name = "Team"
    url = "/about/team"
    weight = 6
    ```

4. Bei Bedarf kannst du durch Verschachtelung Unterseiten eines Menüpunkts einordnen:

    ```toml
    [menu.[main]]
    name = "Über uns"
    url = "/about"
    weight = 2

      [[menu.main]]
      parent = "Über uns"
      name = "Team"
      url = "/about/team"
      weight = 6
    ```

---

### Seite bearbeiten (Content/Markdown)

1. Öffne die entsprechende `.md`-Datei im `content/`-Verzeichnis.
2. Bearbeite den Inhalt im Markdown-Format.
3. Änderungen werden beim Speichern durch `hugodev` automatisch neu geladen.

---

### Shortcode Snippets

Du kannst Code Snippets in deine Markdown Files integrieren, um die Website interaktiver zu gestalten. Nachfolgend findest du hierfür eine Anleitung.

#### Details

<img width="2140" alt="Details" src="https://github.com/user-attachments/assets/bb87179d-2ac8-4079-a6f5-4067cf9efee6" />

```
{{< details
title="Headline"
number="01" >}}

{{ content }}

{{< /details >}}
```

#### Profile

<img width="2070" alt="Profile" src="https://github.com/user-attachments/assets/e5966de3-7542-49dd-acd3-9d245a9ef358" />

```
{{< profile
name="Name"
image="/images/mitglieder/vorname-nachname.jpg"
studiengang="BA Informatik, 1. Semester"
email="vorname.nachname@ifsr.de" >}}

{{ content }}

{{< /profile >}}
```

## 📬 Kontakt

Bei Fragen oder Vorschlägen zur Website kontaktiere uns gerne:

- 📧 E-Mail: [fsr@ifsr.de](mailto:fsr@ifsr.de)
- 🌐 Website: [https://ifsr.de](https://ifsr.de)

Bei spezifischen Fragen zum Sourcecode kontaktiere:

- [jannik.menzel@ifsr.de](mailto:jannik.menzel@ifsr.de)
