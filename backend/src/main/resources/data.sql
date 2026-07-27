INSERT INTO project (id, title, started_at, finished_at, status)
VALUES (1,  'NotebookLM-Klon',               DATE '2026-01-01', NULL,              'aktiv'),
       (2,  'KI-Analysetool (Multi-Tenant)', DATE '2025-06-01', NULL,              'aktiv'),
       (3,  'KI: Med. Verordnungen',         DATE '2025-09-01', DATE '2026-02-28', 'abgeschlossen'),
       (4,  'Meeting-Bot & Design-Generator',DATE '2025-10-01', DATE '2025-12-31', 'abgeschlossen'),
       (5,  'Automatisierter Bewerbungsbot', DATE '2026-03-01', NULL,              'aktiv'),
       (6,  'RAG-System (Demo)',             DATE '2025-04-01', DATE '2025-05-31', 'abgeschlossen'),
       (7,  'Kundenportal & CMS',            DATE '2025-06-01', NULL,              'aktiv'),
       (8,  'Dokumentenzulassungsplattform', DATE '2024-11-01', DATE '2025-04-30', 'abgeschlossen'),
       (9,  'Streaming Aggregator',          DATE '2024-06-01', DATE '2024-09-30', 'abgeschlossen'),
       (10, 'Videolernplattform',            DATE '2023-11-01', DATE '2024-11-30', 'abgeschlossen'),
       (11, 'Webgame & Authoring Tool',      DATE '2022-10-01', DATE '2023-03-31', 'abgeschlossen'),
       (12, 'Interaktive Computergrafik',    DATE '2022-04-01', DATE '2022-09-30', 'abgeschlossen'),
       (13, 'VR Anti-Mobbing Spiel',
        DATE '2023-04-01', DATE '2023-09-30',
        'abgeschlossen'),
       (14, 'Bachelorprojekt - 3D-Welt',
        DATE '2024-01-01', DATE '2024-08-31',
        'abgeschlossen')
    ON CONFLICT (id) DO NOTHING;

INSERT INTO project_tech_stack (project_id,
                                tech_stack)
SELECT v.project_id, v.tech
FROM (VALUES (1,  'Next.js'), (1,
                               'FastAPI'), (1, 'RAG'), (1, 'Claude Code'),
             (1, 'LLMs'),
             (2,  'React'), (2, 'Next.js'),
             (2, 'NestJS'), (2, 'PostgreSQL'), (2,
                                                'Mistral'), (2, 'GPT'),
             (3,  'React'), (3, 'Next.js'), (3, 'NestJS'), (3, 'PostgreSQL'),
             (4,  'Claude Code'), (4, 'LLMs'), (4, 'React'),
             (5,  'Claude Code'), (5, 'LLMs'), (5, 'Web Scraping'),
             (6,  'Python'), (6, 'FastAPI'), (6, 'Streamlit'), (6, 'ChromaDB'), (6, 'Ollama'),
             (7,  'React'), (7, 'Next.js'), (7, 'NestJS'), (7, 'PostgreSQL'),
             (8,  'React'), (8, 'Next.js'), (8, 'TypeScript'), (8, 'NestJS'),
             (9,  'JavaScript'), (9, 'Browser Extension APIs'),
             (10, 'PHP'), (10, 'TYPO3'), (10, 'JavaScript'),
             (11, 'Java'), (11, 'Play Framework'), (11, 'JavaFX'), (11, 'MySQL'),
             (12, 'TypeScript'), (12, 'WebGL'),
             (13, 'Unity'), (13, 'C#'),(13, 'VR'),
             (14, 'Unreal Engine'), (14, 'Blueprints')) AS v(project_id, tech)
WHERE NOT EXISTS (SELECT 1 FROM project_tech_stack);

SELECT setval(pg_get_serial_sequence('project', 'id'),
              (SELECT MAX(id) FROM project));