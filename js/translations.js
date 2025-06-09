// Global variables for language management
let currentLanguage = 'en';

// Language data for the website
const languageData = {
    // English translations
    en: {
        nav: {
            home: "Home",
            about: "About",
            services: "Services",
            specialization: "Specialization",
            testimonials: "Testimonials",
            contact: "Contact"
        },
        hero: {
            title: "Professional Psychological Support",
            subtitle: "Helping you navigate life's challenges with compassion and expertise",
            cta: "Book a Consultation"
        },
        about: {
            title: "About Me",
            paragraph1: "I am a licensed psychologist with over 10 years of experience helping individuals overcome personal challenges and improve their mental wellbeing.",
            paragraph2: "My approach combines evidence-based techniques with compassionate care to create a safe and supportive environment for my clients.",
            paragraph3: "I specialize in anxiety management, depression treatment, relationship counseling, and personal development."
        },
        services: {
            title: "My Services",
            individual: {
                title: "Individual Therapy",
                description: "One-on-one sessions focused on your specific needs and challenges."
            },
            couples: {
                title: "Couples Counseling",
                description: "Helping partners improve communication and resolve conflicts."
            },
            family: {
                title: "Family Therapy",
                description: "Working with families to enhance relationships and solve problems together."
            },
            anxiety: {
                title: "Anxiety & Stress Management",
                description: "Learn effective techniques to manage anxiety and reduce stress."
            }
        },
        testimonials: {
            title: "Testimonials",
            testimonial1: {
                text: "Working with Oxana has been transformative. Her guidance helped me overcome anxiety issues I've struggled with for years.",
                name: "Maria D."
            },
            testimonial2: {
                text: "Our couples sessions with Oxana saved our relationship. She provided us with tools to communicate better and understand each other.",
                name: "Alexandru & Elena"
            },
            testimonial3: {
                text: "I appreciated Oxana's professional approach and how she created a safe space for me to work through my issues.",
                name: "Sergei K."
            }
        },
        contact: {
            title: "Contact Me",
            phone: "+373 60079972 (Moldova)",
            location: "Chisinau, Moldova",
            form: {
                name: "Name",
                email: "Email",
                subject: "Subject",
                message: "Message",
                submit: "Send Message",
                sending: "Sending...",
                success: "Message sent successfully!",
                error: "Failed to send message. Please try again."
            }
        },
        footer: {
            profession: "Professional Psychologist",
            rights: "All rights reserved"
        },
        specialization: {
            title: "Child and Family Protection",
            intro: "In the field of child and family protection, psychologists have an essential and complex role. They deal with a wide range of activities, all aimed at supporting the healthy development of the child and the balanced functioning of the family.",
            evaluation: {
                title: "Psychological Evaluation",
                point1: "Evaluation of the child's mental and emotional development (intelligence, behavior, attachment, etc.)",
                point2: "Diagnosis of possible psychological disorders or developmental delays",
                point3: "Assessment of family relationships (child-parent, sibling relationships, etc.)",
                point4: "Preparation of psychological reports for courts or protection authorities"
            },
            counseling: {
                title: "Psychological Counseling and Intervention",
                point1: "Counseling children at risk (abuse, neglect, family separation)",
                point2: "Emotional support for children in special protection systems (placement centers, family placement)",
                point3: "Counseling parents to improve their relationship with the child or to manage parenting difficulties",
                point4: "Interventions to strengthen the child's attachment to the caregiver"
            },
            decisions: {
                title: "Support in Child Protection Decisions",
                point1: "Participation in commissions to establish protection measures (placement, reintegration, adoption, etc.)",
                point2: "Recommending appropriate protection measures based on the child's best interest",
                point3: "Providing psychological viewpoints for courts or authorities"
            },
            monitoring: {
                title: "Case Supervision and Monitoring",
                point1: "Monitoring the psychological evolution of children in placement",
                point2: "Evaluating the child's adaptation to the family environment or placement center",
                point3: "Collaboration with social workers, educators, and other institutions involved in childcare"
            },
            promotion: {
                title: "Promoting Mental Health in the Family",
                point1: "Parental education programs",
                point2: "Abuse and neglect prevention activities",
                point3: "Support groups for parents or children"
            },
            image1: "Individual session with a child",
            image2: "Family counseling session",
            image3: "Parent support group"
        }
    },
    
    // Romanian translations
    ro: {
        nav: {
            home: "Acasă",
            about: "Despre",
            services: "Servicii",
            specialization: "Specializare",
            testimonials: "Testimoniale",
            contact: "Contact"
        },
        hero: {
            title: "Suport Psihologic Profesional",
            subtitle: "Vă ajut să navigați provocările vieții cu compasiune și expertiză",
            cta: "Programează o Consultație"
        },
        about: {
            title: "Despre Mine",
            paragraph1: "Sunt un psiholog licențiat cu peste 10 ani de experiență în ajutarea oamenilor să depășească provocările personale și să-și îmbunătățească bunăstarea mentală.",
            paragraph2: "Abordarea mea combină tehnici bazate pe dovezi cu grija compasională pentru a crea un mediu sigur și de susținere pentru clienții mei.",
            paragraph3: "Mă specializez în gestionarea anxietății, tratamentul depresiei, consilierea relațiilor și dezvoltarea personală."
        },
        services: {
            title: "Serviciile Mele",
            individual: {
                title: "Terapie Individuală",
                description: "Sesiuni unu-la-unu concentrate pe nevoile și provocările dvs. specifice."
            },
            couples: {
                title: "Consiliere pentru Cupluri",
                description: "Ajut partenerii să îmbunătățească comunicarea și să rezolve conflictele."
            },
            family: {
                title: "Terapie de Familie",
                description: "Lucrez cu familii pentru a îmbunătăți relațiile și a rezolva problemele împreună."
            },
            anxiety: {
                title: "Gestionarea Anxietății și Stresului",
                description: "Învățați tehnici eficiente pentru a gestiona anxietatea și a reduce stresul."
            }
        },
        testimonials: {
            title: "Testimoniale",
            testimonial1: {
                text: "Lucrul cu Oxana a fost transformator. Îndrumarea ei m-a ajutat să depășesc problemele de anxietate cu care m-am luptat de ani de zile.",
                name: "Maria D."
            },
            testimonial2: {
                text: "Sesiunile noastre de cuplu cu Oxana ne-au salvat relația. Ne-a oferit instrumente pentru a comunica mai bine și a ne înțelege reciproc.",
                name: "Alexandru & Elena"
            },
            testimonial3: {
                text: "Am apreciat abordarea profesională a Oxanei și modul în care a creat un spațiu sigur pentru mine pentru a-mi rezolva problemele.",
                name: "Sergei K."
            }
        },
        contact: {
            title: "Contactează-mă",
            phone: "+373 60079972 (Moldova)",
            location: "Chișinău, Moldova",
            form: {
                name: "Nume",
                email: "Email",
                subject: "Subiect",
                message: "Mesaj",
                submit: "Trimite Mesaj",
                sending: "Se trimite...",
                success: "Mesaj trimis cu succes!",
                error: "Nu s-a putut trimite mesajul. Vă rugăm să încercați din nou."
            }
        },
        footer: {
            profession: "Psiholog Profesionist",
            rights: "Toate drepturile rezervate"
        },
        specialization: {
            title: "Protecția Copilului și a Familiei",
            intro: "În domeniul protecției copilului și a familiei, psihologii au un rol esențial și complex. Ei se ocupă de o gamă largă de activități, toate având ca scop sprijinirea dezvoltării sănătoase a copilului și funcționarea echilibrată a familiei.",
            evaluation: {
                title: "Evaluare Psihologică",
                point1: "Evaluarea dezvoltării psihice și emoționale a copilului (inteligență, comportament, atașament etc.)",
                point2: "Diagnosticarea unor eventuale tulburări psihologice sau întârzieri în dezvoltare",
                point3: "Evaluarea relațiilor familiale (copil-părinte, relații între frați etc.)",
                point4: "Elaborarea de rapoarte psihologice pentru instanță sau pentru autoritățile de protecție"
            },
            counseling: {
                title: "Consiliere Psihologică și Intervenție",
                point1: "Consilierea copiilor aflați în situații de risc (abuz, neglijare, separare de familie)",
                point2: "Sprijin emoțional pentru copii aflați în sistemul de protecție specială (centre de plasament, plasament familial)",
                point3: "Consilierea părinților pentru îmbunătățirea relației cu copilul sau pentru gestionarea dificultăților parentale",
                point4: "Intervenții pentru consolidarea atașamentului copilului față de îngrijitor"
            },
            decisions: {
                title: "Sprijin în Luarea Deciziilor Privind Protecția Copilului",
                point1: "Participă la comisii pentru stabilirea măsurilor de protecție (plasament, reintegrare, adopție etc.)",
                point2: "Recomandă tipul de măsură de protecție potrivită în funcție de interesul superior al copilului",
                point3: "Oferă puncte de vedere psihologice pentru instanțe sau autorități"
            },
            monitoring: {
                title: "Supravegherea și Monitorizarea Cazurilor",
                point1: "Monitorizează evoluția psihologică a copiilor aflați în plasament",
                point2: "Evaluează adaptarea copilului la mediul familial sau la centrul de plasament",
                point3: "Colaborează cu asistenții sociali, educatorii și alte instituții implicate în îngrijirea copilului"
            },
            promotion: {
                title: "Promovarea Sănătății Mintale în Familie",
                point1: "Programe de educație parentală",
                point2: "Activități de prevenire a abuzului și neglijării",
                point3: "Grupuri de sprijin pentru părinți sau copii"
            },
            image1: "Sesiune individuală cu un copil",
            image2: "Ședință de consiliere familială",
            image3: "Grup de sprijin pentru părinți"
        }
    },
    
    // Russian translations
    ru: {
        nav: {
            home: "Главная",
            about: "Обо мне",
            services: "Услуги",
            specialization: "Специализация",
            testimonials: "Отзывы",
            contact: "Контакты"
        },
        hero: {
            title: "Профессиональная Психологическая Поддержка",
            subtitle: "Помогаю вам преодолевать жизненные трудности с состраданием и профессионализмом",
            cta: "Записаться на Консультацию"
        },
        about: {
            title: "Обо Мне",
            paragraph1: "Я лицензированный психолог с более чем 10-летним опытом помощи людям в преодолении личных проблем и улучшении психического благополучия.",
            paragraph2: "Мой подход сочетает научно обоснованные методы с чутким отношением, чтобы создать безопасную и поддерживающую среду для моих клиентов.",
            paragraph3: "Я специализируюсь на управлении тревогой, лечении депрессии, консультировании по вопросам отношений и личностном развитии."
        },
        services: {
            title: "Мои Услуги",
            individual: {
                title: "Индивидуальная Терапия",
                description: "Индивидуальные сессии, сосредоточенные на ваших конкретных потребностях и проблемах."
            },
            couples: {
                title: "Консультирование Пар",
                description: "Помощь партнерам в улучшении коммуникации и разрешении конфликтов."
            },
            family: {
                title: "Семейная Терапия",
                description: "Работа с семьями для укрепления отношений и совместного решения проблем."
            },
            anxiety: {
                title: "Управление Тревогой и Стрессом",
                description: "Изучение эффективных техник для управления тревогой и снижения стресса."
            }
        },
        testimonials: {
            title: "Отзывы",
            testimonial1: {
                text: "Работа с Оксаной изменила мою жизнь. Её руководство помогло мне преодолеть проблемы с тревогой, с которыми я боролась годами.",
                name: "Мария Д."
            },
            testimonial2: {
                text: "Наши сессии для пар с Оксаной спасли наши отношения. Она предоставила нам инструменты для лучшего общения и понимания друг друга.",
                name: "Александр и Елена"
            },
            testimonial3: {
                text: "Я оценил профессиональный подход Оксаны и то, как она создала безопасное пространство для решения моих проблем.",
                name: "Сергей К."
            }
        },
        contact: {
            title: "Связаться со Мной",
            phone: "+373 60079972 (Молдова)",
            location: "Кишинёв, Молдова",
            form: {
                name: "Имя",
                email: "Эл. почта",
                subject: "Тема",
                message: "Сообщение",
                submit: "Отправить Сообщение",
                sending: "Отправка...",
                success: "Сообщение успешно отправлено!",
                error: "Не удалось отправить сообщение. Пожалуйста, попробуйте еще раз."
            }
        },
        footer: {
            profession: "Профессиональный Психолог",
            rights: "Все права защищены"
        },
        specialization: {
            title: "Защита Детей и Семьи",
            intro: "В области защиты детей и семьи психологи играют важную и сложную роль. Они занимаются широким спектром деятельности, направленной на поддержку здорового развития ребенка и гармоничного функционирования семьи.",
            evaluation: {
                title: "Психологическая Оценка",
                point1: "Оценка психического и эмоционального развития ребенка (интеллект, поведение, привязанность и т.д.)",
                point2: "Диагностика возможных психологических расстройств или задержек развития",
                point3: "Оценка семейных отношений (родитель-ребенок, отношения между братьями и сестрами и т.д.)",
                point4: "Подготовка психологических заключений для судов или органов защиты"
            },
            counseling: {
                title: "Психологическое Консультирование и Вмешательство",
                point1: "Консультирование детей в ситуациях риска (насилие, пренебрежение, разлучение с семьей)",
                point2: "Эмоциональная поддержка детей в системе специальной защиты (центры размещения, семейное размещение)",
                point3: "Консультирование родителей для улучшения отношений с ребенком или для управления родительскими трудностями",
                point4: "Вмешательства для укрепления привязанности ребенка к опекуну"
            },
            decisions: {
                title: "Поддержка в Принятии Решений по Защите Детей",
                point1: "Участие в комиссиях по установлению мер защиты (размещение, реинтеграция, усыновление и т.д.)",
                point2: "Рекомендации по типу мер защиты, основанные на наилучших интересах ребенка",
                point3: "Предоставление психологических точек зрения для судов или органов власти"
            },
            monitoring: {
                title: "Надзор и Мониторинг Случаев",
                point1: "Мониторинг психологической эволюции детей, находящихся под опекой",
                point2: "Оценка адаптации ребенка к семейной среде или центру размещения",
                point3: "Сотрудничество с социальными работниками, воспитателями и другими учреждениями, участвующими в уходе за ребенком"
            },
            promotion: {
                title: "Продвижение Психического Здоровья в Семье",
                point1: "Программы родительского образования",
                point2: "Мероприятия по предотвращению насилия и пренебрежения",
                point3: "Группы поддержки для родителей или детей"
            },
            image1: "Индивидуальная сессия с ребенком",
            image2: "Сессия семейного консультирования",
            image3: "Группа поддержки для родителей"
        }
    }
}; 