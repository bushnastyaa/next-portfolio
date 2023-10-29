"use client";

import React, { useRef } from "react";
import ProjectCard from './ProjectCard';
import { motion, useInView } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Full-stack Booking App",
    subtitle: "TS, Next, React, Tailwind, Prisma, MongoDB",
    description: `Веб-сайт, на котором можно найти и забронировать 
    жилье по всему миру. Для аутентификации используется NextAuth. 
    Для создания форм - React Hook Form`,
    image: "/images/projects/book.png",
    gitUrl: "https://github.com/bushnastyaa/next-booking-app.git",
    previewUrl: "https://next-book-app.vercel.app",
  },
  {
    id: 2,
    title: "Чат (Slack)",
    subtitle: "React, Redux Toolkit, Bootstrap",
    description: `Упрощенная версия чата Slack. Реализовано через 
    WebSocket. Для авторизации и аутентификации используется 
    технология JWT. Формы создаются с помощью библиотеки Formik`,
    image: "/images/projects/chat-slack.png",
    gitUrl: "https://github.com/bushnastyaa/js-react-developer-project-12.git",
    previewUrl: "https://chat-ify4.onrender.com",
  },
  {
    id: 3,
    title: "Интернет-магазин",
    subtitle: "TS, React, Redux Toolkit, RTK Query",
    description: `Интернет-магазин с фокусом на простоту и чистый
    дизайн. Приоритет отдается пользовательскому опыту,
    легко находить нужную продукцию по категориям и совершать покупки`,
    image: "/images/projects/store-mirage.png",
    gitUrl: "https://github.com/bushnastyaa/react-online-store.git",
    previewUrl: "https://react-online-store-zeta.vercel.app",
  },
  {
    id: 4,
    title: "Full-stack Web Blog",
    subtitle: "React, Express, MongoDB, Tailwind",
    description: `Веб-блог, предоставляет пользователям возможность 
    публиковать статьи (посты), связанные с информационными технологиями.
    JWT, React Hook Form`,
    image: "/images/projects/blog-mern.png",
    gitUrl: "https://github.com/bushnastyaa/web-blog-mern.git",
    previewUrl: "https://web-blog-jp52.onrender.com",
  },
  {
    id: 5,
    title: "Валидатор данных",
    subtitle: "Прокачка проектирования объектно-ориентированной архитектуры",
    description: `Библиотека для проверки корректности 
    (валидации) данных перед их использованием. Предоставляет 
    несколько методов проверки данных и возможность
    писать собственные валидаторы`,
    image: "/images/projects/val.png",
    gitUrl: "https://github.com/bushnastyaa/js-oop-project-62.git",
  },
  {
    id: 6,
    title: "Загрузчик страниц",
    subtitle: "Прокачка написания асинхронного кода",
    description: `Утилита, которая скачивает страницы из интернета на 
    ваш компьютер. Также скачивает все ресурсы (картинки, стили и js),
    давая возможность открывать страницу без интернета`,
    image: "/images/projects/async.png",
    gitUrl: "https://github.com/bushnastyaa/js-async-project-4.git",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-7">
        Мои проекты
      </h2>
      <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
};

export default Projects;
