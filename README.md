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

## 📬 Kontakt

Bei Fragen oder Vorschlägen zur Website kontaktiere uns gerne:

- 📧 E-Mail: [fsr@ifsr.de](mailto:fsr@ifsr.de)
- 🌐 Website: [https://ifsr.de](https://ifsr.de)

Bei spezifischen Fragen zum Sourcecode kontaktiere:

- [jannik.menzel@ifsr.de](mailto:jannik.menzel@ifsr.de)
