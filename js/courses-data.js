const AV_COURSES = [
  {
    slug: 'java-basics',
    title: 'Java Basics',
    category: 'java',
    badge: 'Core Kickoff',
    level: 'Beginner',
    duration: '≈ 20 hrs',
    topics: '40 topics',
    cover: 'img/courses/java_basics.webp',
    accent: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    tagline: 'Kick off your Java era with modern syntax, tooling, and ultra-practical practice reps.',
    summary: `I built this starter path for learners who want to become dangerous with Java 21 \n` +
      `without drowning in buzzwords. Every clip ships with context, IDE shortcuts, and demo code so you \n` +
      `can follow along even if you just opened your very first terminal.`,
    description: `This track keeps things honest: no overnight "pro" promises — just disciplined reps on \n` +
      `syntax, memory model, object design, and debugging habits. Work through each topic, practice the \n` +
      `assignments, keep notes, and you will have a rock-solid Java foundation for any backend stack.`,
    playlistUrl: 'https://www.youtube.com/@abhishekvermaa10/playlists',
    repositoryUrl: 'https://github.com/abhishekvermaa10?tab=repositories',
    featured: false,
    vibes: [
      'Java 21',
      'Problem solving',
      'Discipline'
    ],
    keyTakeaways: [
      'Map out the entire Java toolchain (JDK, JRE, JVM) and install it with aliases, profiles, and shortcuts.',
      'Understand control flow, data structures, and OOP patterns through real demos instead of textbook theory.',
      'Adopt a growth ritual: code-labs, retrospective notes, and tiny shipping goals every single week.',
    ],
    tableOfContent: [
      'Why Java?',
      'What is Java?',
      'Java Architecture (JDK, JRE & JVM)',
      'First Hello World Program',
      'Class, Method & Object (Structure & Naming Practices)',
      'Data Types (Primitive & Non-Primitive)',
      'Variables (Declaration, Initialization & Naming Practices)',
      'Keywords & Reserved Words',
      'Comments (Single-line & Multi-line)',
      'Operators (Arithmetic, Bitwise, Shift, Relational, Ternary & Logical)',
      'Type Casting (Implicit & Explicit)',
      'Conditional Statements (<code>if</code>, <code>else</code> & <code>switch</code>)',
      'Loops (<code>for</code>, <code>while</code> & <code>do-while</code>)',
      '<code>break</code> & <code>continue</code> Keywords',
      'Arrays (1D & 2D Arrays & Array of Objects)',
      'Enhanced For Loop',
      'OOP Principles (Encapsulation, Inheritance, Polymorphism & Abstraction)',
      'Packages & Imports',
      'Constructors (Default & Parameterized)',
      '<code>this</code> Keyword',
      'Inheritance (Single, Multilevel & Hierarchical)',
      '<code>instanceof</code> Operator',
      'Polymorphism (Method Overloading & Method Overriding)',
      'Access Modifiers (<code>public</code>, <code>private</code>, <code>protected</code> & default)',
      '<code>super</code> Keyword',
      '<code>final</code> Keyword (Variables, Methods & Classes)',
      '<code>static</code> Modifier (Variables, Methods & Blocks)',
      'Variable Arguments (Varargs)',
      'Abstract Class',
      'Interface (Including <code>default</code>, <code>static</code> & <code>private</code> methods)',
      'Annotations (Built-in & Custom)',
      'Object Class (<code>toString()</code>, <code>equals()</code>, <code>hashCode()</code>, etc.)',
      'String Class',
      'StringBuilder Class',
      'Scanner Class',
      'Inner Classes (Local, Anonymous, Static & Member)',
      'Garbage Collection & Memory Management',
      'Enumeration (Enums)',
      'Records',
      'Sealed Classes'
    ],
    prerequisiteCourses: [],
    optionalPrerequisiteCourses: [],
    nextSteps: [
      'java-advanced',
      'java-database-connectivity-jdbc'
    ],
    resources: [
      { label: 'Learn by watching', url: 'https://www.youtube.com/@abhishekvermaa10/playlists', type: 'video' },
      { label: 'Learn by coding', url: 'https://github.com/abhishekvermaa10?tab=repositories', type: 'code' },
    ],
    tags: [
      'Syntax', 
      'OOP', 
      'Tooling'
    ],
    status: 'Always free',
    hasDetail: true,
    href: 'course.html?course=java-basics',
  },
  {
    slug: 'java-advanced',
    title: 'Java Advanced',
    category: 'java',
    badge: 'Deep Dive',
    level: 'Intermediate',
    duration: '≈ 19 hrs',
    topics: '10 topics',
    cover: 'img/courses/java_advanced.webp',
    accent: 'linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)',
    tagline: 'Collections, concurrency, lambdas, and debugging mindsets senior engineers expect.',
    summary: `Move past syntax and learn how to design resilient Java code. We go hands-on with \n` +
      `collections, generics, multi-threading, modern functional APIs, and the patterns interviewers love \n` +
      `asking about.`,
    description: `Every lesson pairs a real-world scenario with code walkthroughs and lab assignments. \n` +
      `You will finish understanding why certain APIs exist, how to benchmark them, and how to make \n` +
      `tradeoffs when building enterprise Java services.`,
    playlistUrl: 'https://www.youtube.com/playlist?list=PLJDwhlqmpSfP5xBfI-41j3gNZ6GAsrxD-',
    repositoryUrl: 'https://github.com/abhishekvermaa10/Exception-Handling',
    featured: true,
    vibes: [
      'Collections', 
      'Concurrency', 
      'Streams'
    ],
    keyTakeaways: [
      'Master checked vs unchecked exceptions and design defensive APIs.',
      'Pick the right data structure for any load and reason about time + memory.',
      'Write concurrent code safely using executors, locks, and java.util.concurrent.',
    ],
    tableOfContent: [
      'Exception Handling',
      'Generics',
      'Collections Framework',
      'Multithreading',
      'Concurrency',
      'Lambda Expression',
      'Stream API',
      'Optional Class',
      'Date/Time API',
      'Serialization',
    ],
    prerequisiteCourses: [
      'java-basics'
    ],
    optionalPrerequisiteCourses: [],
    nextSteps: [
      'java-database-connectivity-jdbc',
      'maven',
    ],
    resources: [
      { label: 'Learn by watching', url: 'https://www.youtube.com/playlist?list=PLJDwhlqmpSfP5xBfI-41j3gNZ6GAsrxD-', type: 'video' },
      { label: 'Learn by coding', url: 'https://github.com/abhishekvermaa10/Collection-Framework', type: 'code' },
    ],
    tags: [
      'Collections', 
      'Streams', 
      'Threads'
    ],
    status: 'Always free',
    hasDetail: true,
    href: 'course.html?course=java-advanced',
  },
  {
    slug: 'java-database-connectivity-jdbc',
    title: 'Java Database Connectivity (JDBC)',
    category: 'java',
    badge: 'Data Layer',
    level: 'Intermediate',
    duration: '≈ 7 hrs',
    topics: '8 topics',
    cover: 'img/courses/java_database_connectivity_jdbc.webp',
    accent: 'linear-gradient(135deg, #74ebd5 0%, #9face6 100%)',
    tagline: 'Wire Java apps to relational databases with clean, secure patterns.',
    summary: `Learn how JDBC really works so Spring Data and ORM abstractions make sense later. \n` +
      `From statements to transactions, you will build CRUD flows the right way.`,
    description: `We focus on production-minded habits: connection pooling, SQL injection defence, \n` +
      `batching, transaction boundaries, and logging. Every exercise moves from naive code to \n` +
      `battle-tested patterns so you can feel the difference.`,
    playlistUrl: 'https://www.youtube.com/playlist?list=PLJDwhlqmpSfP1FroiBGc7N3-r67VaEp0V',
    repositoryUrl: 'https://github.com/abhishekvermaa10/JDBC',
    featured: false,
    vibes: [
      'SQL', 
      'Transactions', 
      'Security'
    ],
    keyTakeaways: [
      'Confidently bootstrap and tear down database connections.',
      'Write safe CRUD operations using PreparedStatement and CallableStatement.',
      'Design ACID-friendly flows using manual transaction control.',
    ],
    tableOfContent: [
      'CRUD using List',
      'Establish connection with Database',
      'CRUD using Statement',
      'SQL Injection Attack',
      'CRUD using PreparedStatement',
      'Call using CallableStatement',
      'Transactions',
      'Tips to enhance code',
    ],
    prerequisiteCourses: [
      'java-basics', 
      'java-advanced'
    ],
    optionalPrerequisiteCourses: [],
    nextSteps: [
      'maven', 
      'hibernate'
    ],
    resources: [
      { label: 'Learn by watching', url: 'https://www.youtube.com/playlist?list=PLJDwhlqmpSfP1FroiBGc7N3-r67VaEp0V', type: 'video' },
      { label: 'Learn by coding', url: 'https://github.com/abhishekvermaa10/JDBC', type: 'code' },
    ],
    tags: [
      'SQL', 
      'Transactions', 
      'Security'
    ],
    status: 'Always free',
    hasDetail: true,
    href: 'course.html?course=java-database-connectivity-jdbc',
  },
  {
    slug: 'maven',
    title: 'Maven',
    category: 'java',
    badge: 'Tooling',
    level: 'Beginner',
    duration: '≈ 3 hrs',
    topics: '4 topics',
    cover: 'img/courses/maven.webp',
    accent: 'linear-gradient(135deg, #a8ff78 0%, #78ffd6 100%)',
    tagline: 'Automate builds, dependencies, and lifecycle like a pro.',
    summary: `Understand Maven without memorising XML snippets. We cover real project layouts, \n` +
      `plugins, profiles, and the tricks teams use to keep builds fast and reliable.`,
    description: `You will scaffold Java + web projects, wire up third-party dependencies safely, and \n` +
      `own the lifecycle phases. The playlist also shows how IDEs hook into Maven so you stop \n` +
      `fighting your tooling.`,
    playlistUrl: 'https://www.youtube.com/playlist?list=PLJDwhlqmpSfMNgiOg0xyg4hVsPcJUh4jE',
    repositoryUrl: 'https://github.com/abhishekvermaa10/Maven',
    featured: false,
    vibes: [
      'Automation', 
      'Builds'
    ],
    keyTakeaways: [
      'Model multi-module projects with confidence.',
      'Use plugins, profiles, and properties to make builds portable.',
      'Publish artifacts, manage SNAPSHOTs, and hook Maven into IDEs.',
    ],
    tableOfContent: [
      'Why Maven?',
      'Quickstart with Maven',
      'Webapp with Maven',
      'Installing Apache Maven in Windows',
    ],
    prerequisiteCourses: [
      'java-basics', 
      'java-advanced'
    ],
    optionalPrerequisiteCourses: [
      'java-database-connectivity-jdbc'
    ],
    nextSteps: [
      'hibernate', 
      'spring-basics-with-spring-boot'
    ],
    resources: [
      { label: 'Learn by watching', url: 'https://www.youtube.com/playlist?list=PLJDwhlqmpSfMNgiOg0xyg4hVsPcJUh4jE', type: 'video' },
      { label: 'Learn by coding', url: 'https://github.com/abhishekvermaa10/Maven', type: 'code' },
    ],
    tags: [
      'Automation', 
      'DevOps'
    ],
    status: 'Always free',
    hasDetail: true,
    href: 'course.html?course=maven',
  },
  {
    slug: 'hibernate',
    title: 'Hibernate',
    category: 'java',
    badge: 'ORM Mastery',
    level: 'Intermediate',
    duration: '≈ 18 hrs',
    topics: '26 topics',
    cover: 'img/courses/hibernate.webp',
    accent: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    tagline: 'Map Java objects to relational tables without losing your sanity.',
    summary: `We demystify Hibernate by building multiple entities, relationships, and inheritance \n` +
      `strategies from scratch. You will see how Hibernate behaves under the hood so you can tune it.`,
    description: `From basic CRUD to complex HQL queries, caching, and performance tuning, \n` +
      `the course walks through everything you need before entering Spring Data JPA land.`,
    playlistUrl: 'https://www.youtube.com/playlist?list=PLJDwhlqmpSfNYPqMMqNj7DXl41fnTVJuY',
    repositoryUrl: 'https://github.com/abhishekvermaa10/Hibernate',
    featured: false,
    vibes: [
      'ORM', 
      'SQL', 
      'Performance'
    ],
    keyTakeaways: [
      'Model entities and relationships precisely.',
      'Control fetching, caching, and transaction boundaries.',
      'Use HQL and Criteria API for expressive queries.',
    ],
    tableOfContent: [
      'CRUD operations using JDBC',
      'Hibernate - Why, What and How?',
      'CRUD operations using Hibernate',
      'Primary Key using AUTO strategy',
      'Primary Key using IDENTITY strategy',
      'Primary Key using UUID strategy',
      'Composite Primary Key',
      'Natural Id',
      'One-to-One Mapping',
      'One-to-One Bidirectional Mapping',
      'Eager Loading vs Lazy Loading',
      'One-to-Many Mapping and Many-to-One Mapping',
      'Many-to-Many Mapping',
      'Single Table Inheritance',
      'Joined Inheritance',
      'Table Per Class Inheritance',
      'MappedSuperClass',
      'Introduction to HQL',
      'Solution to N+1 Problem',
      'Complex Queries with HQL',
      'Hibernate Criteria API',
      'Hibernate Entity Lifecycle',
      'Primary Cache',
      'Secondary Cache',
      'Configuring JPA',
      'CRUD operations using JPA'
    ],
    prerequisiteCourses: [
      'java-basics', 
      'java-advanced', 
      'maven'
    ],
    optionalPrerequisiteCourses: [
      'java-database-connectivity-jdbc'
    ],
    nextSteps: [
      'spring-basics-with-spring-boot', 
      'spring-data-jpa-with-spring-boot'
    ],
    resources: [
      { label: 'Learn by watching', url: 'https://www.youtube.com/playlist?list=PLJDwhlqmpSfNYPqMMqNj7DXl41fnTVJuY', type: 'video' },
      { label: 'Learn by coding', url: 'https://github.com/abhishekvermaa10/Hibernate', type: 'code' },
    ],
    tags: [
      'ORM', 
      'SQL'
    ],
    status: 'Always free',
    hasDetail: true,
    href: 'course.html?course=hibernate',
  },
  {
    slug: 'spring-basics-with-spring-boot',
    title: 'Spring Basics with Spring Boot',
    category: 'spring',
    badge: 'Springboard',
    level: 'Beginner',
    duration: '≈ 14 hrs',
    topics: '21 topics',
    cover: 'img/courses/spring_basics_with_spring_boot.webp',
    accent: 'linear-gradient(135deg, #00b09b 0%, #96c93d 100%)',
    tagline: 'Understand IoC, DI, AOP, and Spring Boot superpowers via real build logs.',
    summary: `This track is the handshake between Java foundations and modern Spring Boot stacks. \n` +
      `You will see how annotations translate to runtime behaviour and how Boot accelerates shipping.`,
    description: `We go layer by layer — IoC container, dependency injection styles, stereotypes, \n` +
      `configuration, logging, profiles, AOP, and testing. Cap it off with the Petistaan capstone.`,
    playlistUrl: 'https://www.youtube.com/playlist?list=PLJDwhlqmpSfO7BUlQk_di-86igrzgnsGo',
    repositoryUrl: 'https://github.com/abhishekvermaa10/Spring-Basics-with-Spring-Boot',
    featured: true,
    vibes: [
      'Spring Boot', 
      'IoC',
      'Testing'
    ],
    keyTakeaways: [
      'Explain how IoC containers wire beans and manage scopes.',
      'Leverage Boot starters, logging, profiles, YAML, and devtools.',
      'Implement cross-cutting concerns with AOP and ship a mini product.',
    ],
    tableOfContent: [
      'Why industry level projects use Spring?',
      'Understanding Inversion of Control (IoC)',
      'Implementing Inversion of Control (IoC)',
      'Constructor-based Dependency Injection',
      'Setter-based Dependency Injection',
      'AutoScanning and Stereotype annotations',
      'Autowired and Value annotations',
      'Primary and Qualifier annotations',
      'First Spring Boot Project',
      'CommandLineRunner in Spring Boot',
      'Scope in Spring Boot',
      'Logging in Spring Boot',
      'Reading Properties in Spring Boot',
      'Profiles in Spring Boot',
      'YAML in Spring Boot',
      'Understanding Aspect Oriented Programming (AOP)',
      'Implementing Aspect Oriented Programming (AOP)',
      'Unit Testing in Spring Boot',
      'DevTools',
      'Custom Banner',
      'Capstone Project: Petistaan',
    ],
    prerequisiteCourses: [
      'java-basics', 
      'java-advanced', 
      'maven'
    ],
    optionalPrerequisiteCourses: [
      'java-database-connectivity-jdbc', 
      'hibernate'
    ],
    nextSteps: [
      'spring-data-jpa-with-spring-boot', 
      'spring-rest-with-spring-boot'
    ],
    resources: [
      { label: 'Learn by watching', url: 'https://www.youtube.com/playlist?list=PLJDwhlqmpSfO7BUlQk_di-86igrzgnsGo', type: 'video' },
      { label: 'Learn by coding', url: 'https://github.com/abhishekvermaa10/Spring-Basics-with-Spring-Boot', type: 'code' },
    ],
    tags: [
      'Spring Boot', 
      'IoC'
    ],
    status: 'Always free',
    hasDetail: true,
    href: 'course.html?course=spring-basics-with-spring-boot',
  },
  {
    slug: 'spring-data-jpa-with-spring-boot',
    title: 'Spring Data JPA with Spring Boot',
    category: 'spring',
    badge: 'Data Layer',
    level: 'Intermediate',
    duration: '≈ 11 hrs',
    topics: '13 topics',
    cover: 'img/courses/spring_data_jpa_with_spring_boot.webp',
    accent: 'linear-gradient(135deg, #0cebeb 0%, #20e3b2 45%, #29ffc6 100%)',
    tagline: 'Master repositories, queries, and transactions the Spring Data way.',
    summary: `Translate your Hibernate knowledge into Spring Data productivity. We design \n` +
      `real repositories, pagination, projections, and transaction boundaries.`,
    description: `Expect to work with derived queries, custom JPQL/native queries, specs, multi-database \n` +
      `setups, and test slices. Everything ends with the Petistaan case study.`,
    playlistUrl: 'https://www.youtube.com/playlist?list=PLJDwhlqmpSfPUg7_jffHmF_6MooTlH7rO',
    repositoryUrl: 'https://github.com/abhishekvermaa10/Spring-Data',
    featured: false,
    vibes: [
      'Repositories', 
      'Transactions'
    ],
    keyTakeaways: [
      'Speed-run the CRUD stack with repository abstractions.',
      'Write custom queries using method names, @Query, and Criteria API.',
      'Handle multiple datasources, embedded DBs, and transaction propagation.',
    ],
    tableOfContent: [
      'Project Setup for Spring Data JPA',
      'CRUD operations using Spring ORM',
      'CRUD operations using Spring Data JPA',
      'Pagination and Sorting',
      'Query by methods',
      'Query by annotations',
      'Criteria API',
      'Transactions',
      'Propagation, Anomalies and Isolation in Transactions',
      'Embedded database',
      'Multiple database',
      'Unit Testing',
      'Capstone Project: Petistaan',
    ],
    prerequisiteCourses: [
      'java-basics', 
      'java-advanced', 
      'maven', 
      'hibernate', 
      'spring-basics-with-spring-boot'
    ],
    optionalPrerequisiteCourses: [
      'java-database-connectivity-jdbc'
    ],
    nextSteps: [
      'spring-rest-with-spring-boot', 
      'spring-microservices-with-spring-boot'
    ],
    resources: [
      { label: 'Learn by watching', url: 'https://www.youtube.com/playlist?list=PLJDwhlqmpSfPUg7_jffHmF_6MooTlH7rO', type: 'video' },
      { label: 'Learn by coding', url: 'https://github.com/abhishekvermaa10/Spring-Data', type: 'code' },
    ],
    tags: [
      'Data', 
      'Repositories'
    ],
    status: 'Always free',
    hasDetail: true,
    href: 'course.html?course=spring-data-jpa-with-spring-boot',
  },
  {
    slug: 'spring-rest-with-spring-boot',
    title: 'Spring REST with Spring Boot',
    category: 'spring',
    badge: 'API Design',
    level: 'Intermediate',
    duration: '≈ 20 hrs',
    topics: '24 topics',
    cover: 'img/courses/spring_rest_with_spring_boot.webp',
    accent: 'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)',
    tagline: 'Design real-world REST APIs with validation, docs, and testing baked in.',
    summary: `Start from REST fundamentals and end with production-ready APIs. HATEOAS, \n` +
      `internationalisation, versioning, security basics, docs, and testing are all inside.`,
    description: `Each module pairs HTTP theory with Spring Boot implementation so you know WHY a \n` +
      `pattern exists. Expect to build multiple controllers, handle inputs, and deliver confident APIs.`,
    playlistUrl: 'https://www.youtube.com/playlist?list=PLJDwhlqmpSfM7NmtpvG5tR5TyYctS6yCA',
    repositoryUrl: 'https://github.com/abhishekvermaa10/Spring-REST',
    featured: false,
    vibes: [
      'REST',
      'Docs',
      'Testing'
    ],
    keyTakeaways: [
      'Design stable resource models and HTTP flows.',
      'Handle every type of input and error path.',
      'Ship swagger docs, versioning, CORS, and test automation.',
    ],
    tableOfContent: [
      'Why REST?',
      'What is REST?',
      'Spring MVC vs Spring REST',
      'First application using Spring REST',
      'Advanced annotations & ResponseEntity',
      'Accept input using @RequestBody',
      'Accept input using @PathVariable',
      'Accept input using @RequestParam',
      'Accept input using @MatrixVariable',
      'Exception Handling',
      'Input validation',
      'Pagination',
      'Replace JSON with XML',
      'Actuators',
      'API Versioning',
      'REST Template',
      'REST Client',
      'CORS',
      'HATEOAS',
      'SpringDoc',
      'Internationalization & Localization',
      'Spring Boot Admin',
      'Unit Testing',
      'Cucumber Testing'
    ],
    prerequisiteCourses: [
      'java-basics', 
      'java-advanced', 
      'maven', 
      'hibernate', 
      'spring-basics-with-spring-boot', 
      'spring-data-jpa-with-spring-boot'
    ],
    optionalPrerequisiteCourses: [
      'java-database-connectivity-jdbc'
    ],
    nextSteps: [
      'spring-microservices-with-spring-boot', 
      'spring-ai'
    ],
    resources: [
      { label: 'Learn by watching', url: 'https://www.youtube.com/playlist?list=PLJDwhlqmpSfM7NmtpvG5tR5TyYctS6yCA', type: 'video' },
      { label: 'Learn by coding', url: 'https://github.com/abhishekvermaa10/Spring-REST', type: 'code' },
    ],
    tags: [
      'REST', 
      'APIs'
    ],
    status: 'Always free',
    hasDetail: true,
    href: 'course.html?course=spring-rest-with-spring-boot',
  },
  {
    slug: 'spring-microservices-with-spring-boot',
    title: 'Spring Microservices with Spring Boot',
    category: 'spring',
    badge: 'Architecture',
    level: 'Advanced',
    duration: '≈ 30 hrs',
    topics: '15 topics',
    cover: 'img/courses/spring_microservices_with_spring_boot.webp',
    accent: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    tagline: 'Break monoliths into independent microservices.',
    summary: `We build a microservices playground from a monolith, covering service discovery, \n` +
      `config, API gateways, resilience, tracing, and event-driven messaging.`,
    description: `Every concept is implemented twice: first using Netflix OSS pieces and then \n` +
      `with HashiCorp/modern approaches so you understand options.`,
    playlistUrl: 'https://www.youtube.com/@abhishekvermaa10/playlists',
    repositoryUrl: 'https://github.com/abhishekvermaa10/Spring-Microservices',
    featured: true,
    vibes: [
      'Spring Cloud', 
      'Architecture', 
      'Ops'
    ],
    keyTakeaways: [
      'Break a monolith into services with independent databases.',
      'Configure Spring Cloud Config, Eureka/Consul, and API gateways.',
      'Add resilience (CircuitBreaker), tracing, and Kafka-based messaging.',
    ],
    tableOfContent: [
      'Monolithic Spring Boot Application',
      'Microservices - Why, What and How?',
      'Splitting the Codebase',
      'Splitting the Database',
      'Centralized Configuration using Spring Cloud Config',
      'Load Balancing using Spring Cloud LoadBalancer',
      'Service Discovery using Spring Cloud Netflix Eureka',
      'Fault Tolerance & Resilience using Spring Cloud CircuitBreaker Resilience4j',
      'API Gateway using Spring Cloud Gateway',
      'Inter-Service Communication using Spring Cloud OpenFeign',
      'Distributed Tracing using Micrometer Tracing with Brave and Zipkin',
      'Centralized Configuration using Spring Cloud HashiCorp Consul KV Store',
      'Service Discovery using Spring Cloud HashiCorp Consul',
      'Distributed Tracing using OpenTelemetry',
      'Event-Driven Communication using Apache Kafka',
    ],
    prerequisiteCourses: [
      'java-basics', 
      'java-advanced', 
      'maven', 
      'hibernate', 
      'spring-basics-with-spring-boot', 
      'spring-data-jpa-with-spring-boot', 
      'spring-rest-with-spring-boot'
    ],
    optionalPrerequisiteCourses: [
      'java-database-connectivity-jdbc', 
      'emailing-by-java'
    ],
    nextSteps: [
      'spring-ai'
    ],
    resources: [
      { label: 'Learn by watching', url: 'https://www.youtube.com/@abhishekvermaa10/playlists', type: 'video' },
      { label: 'Learn by coding', url: 'https://github.com/abhishekvermaa10/Spring-Microservices', type: 'code' },
    ],
    tags: [
      'Spring Cloud', 
      'Ops'
    ],
    status: 'Upcoming',
    hasDetail: true,
    href: 'course.html?course=spring-microservices-with-spring-boot',
  },
  {
    slug: 'emailing-by-java',
    title: 'Emailing by Java',
    category: [
      'java', 
      'spring'
    ],
    badge: 'Messaging',
    level: 'Intermediate',
    duration: '≈ 6 hrs',
    topics: '8 topics',
    cover: 'img/courses/emailing_by_java.webp',
    accent: 'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)',
    tagline: 'Design transactional email flows using Java, Spring Boot, and MailPit.',
    summary: `Learn SMTP basics, Freemarker templates, async sending, and local testing so \n` +
      `you can ship polished email features without using SaaS magic.`,
    description: `We start with bare JavaMail APIs, then move to Spring Boot abstraction, include \n` +
      `file uploads, background sending, and local testing using MailPit.`,
    playlistUrl: 'https://www.youtube.com/playlist?list=PLJDwhlqmpSfNPdTXdns60uAtJRoOtjgOs',
    repositoryUrl: 'https://github.com/abhishekvermaa10/Emailing_By_Java',
    featured: false,
    vibes: [
      'Messaging', 
      'Spring Boot'
    ],
    keyTakeaways: [
      'Configure SMTP safely in Java and Spring Boot.',
      'Build Freemarker-powered HTML templates with attachments.',
      'Send emails asynchronously and test locally using MailPit.',
    ],
    tableOfContent: [
      'Java Mail Tutorial for Beginners SMTP | Email in Java with Maven',
      'Send Email with Attachment using SMTP | Email in Java with Maven',
      'Send Rich Text Email using Freemarker and SMTP | Email in Java with Maven',
      'Send Your First Email in Spring Boot',
      'Professional HTML Emails with Attachments using Spring Boot + Freemarker',
      'Send User-Submitted Data & Files via Email in Spring Boot',
      'Send Emails in the Background with Spring Boot Async',
      'Send Emails locally with MailPit in Spring Boot',
    ],
    prerequisiteCourses: [
      'java-basics', 
      'java-advanced', 
      'maven', 
      'spring-basics-with-spring-boot', 
      'spring-rest-with-spring-boot'
    ],
    optionalPrerequisiteCourses: [],
    nextSteps: [
      'spring-microservices-with-spring-boot', 
      'spring-ai'
    ],
    resources: [
      { label: 'Learn by watching', url: 'https://www.youtube.com/playlist?list=PLJDwhlqmpSfNPdTXdns60uAtJRoOtjgOs', type: 'video' },
      { label: 'Learn by coding', url: 'https://github.com/abhishekvermaa10/Emailing_By_Java', type: 'code' },
    ],
    tags: [
      'Messaging', 
      'Spring Boot'
    ],
    status: 'Always free',
    hasDetail: true,
    href: 'course.html?course=emailing-by-java',
  },
  {
    slug: 'spring-ai',
    title: 'Spring AI',
    category: 'spring',
    badge: 'AI + Java',
    level: 'Advanced',
    duration: '≈ 8 hrs',
    topics: '11 topics',
    cover: 'img/courses/spring_ai.webp',
    accent: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tagline: 'Blend LLMs with Spring Boot using Spring AI, RAG, images, and MCP.',
    summary: `LLMs are only helpful when they are productized. This series walks you through \n` +
      `prompting, advisors, memory, tools, RAG, multimodal workflows, and Model Context Protocol.`,
    description: `Every video ships a runnable project plus GitHub code, so you can plug AI into \n` +
      `existing Spring services quickly and safely.`,
    playlistUrl: 'https://www.youtube.com/playlist?list=PLJDwhlqmpSfOTU8G_KcVIDe1gJYHAB8nT',
    repositoryUrl: 'https://github.com/abhishekvermaa10/Spring-AI',
    featured: true,
    vibes: [
      'AI', 
      'LLMs', 
      'Spring Boot'
    ],
    keyTakeaways: [
      'Wire OpenAI/Gemini models using the Spring AI abstraction.',
      'Add advisors, memory, and tool-calling using programmatic + declarative styles.',
      'Build RAG, multimodal flows, and MCP server/client combos.',
    ],
    tableOfContent: [
      'AI to Spring AI',
      'Getting Started with Spring AI',
      'Prompt Engineering',
      'Advisors',
      'Enable Memory with MessageChatMemoryAdvisor',
      'Retrieval Augmented Generation',
      'Describing and Generating Images',
      'Tools - Programmatic Way',
      'Tools - Declarative Way',
      'Creating Model Context Protocol (MCP) Server',
      'Creating Model Context Protocol (MCP) Client'
    ],
    prerequisiteCourses: [
      'java-basics', 
      'java-advanced', 
      'maven', 
      'spring-basics-with-spring-boot', 
      'spring-rest-with-spring-boot'
    ],
    optionalPrerequisiteCourses: [],
    nextSteps: [
      'spring-microservices-with-spring-boot'
    ],
    resources: [
      { label: 'Learn by watching', url: 'https://www.youtube.com/playlist?list=PLJDwhlqmpSfOTU8G_KcVIDe1gJYHAB8nT', type: 'video' },
      { label: 'Learn by coding', url: 'https://github.com/abhishekvermaa10/Spring-AI', type: 'code' },
    ],
    tags: [
      'LLMs', 
      'Spring Boot'
    ],
    status: 'Always free',
    hasDetail: true,
    href: 'course.html?course=spring-ai',
  },
  {
    slug: 'daily-interview-questions',
    title: 'Daily Interview Questions',
    category: 'others',
    badge: 'Shorts',
    level: 'Snackable',
    duration: '165 shorts',
    topics: '165 shorts',
    cover: 'img/courses/daily_interview_questions.webp',
    accent: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    tagline: 'Bite-sized Java + Spring interview drills every single day.',
    summary: 'Micro lessons to keep your whiteboard brain warm.',
    description: 'Quick, focused videos that fit into your daily routine and boost your confidence.',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLJDwhlqmpSfNd4lw3-DNYqyU07FShIwTE',
    repositoryUrl: '',
    featured: false,
    vibes: [
      'Interviews', 
      'Shorts'
    ],
    keyTakeaways: [],
    tableOfContent: [],
    prerequisiteCourses: [],
    optionalPrerequisiteCourses: [],
    nextSteps: [],
    resources: [],
    tags: [
      'Shorts'
    ],
    status: 'Always free',
    hasDetail: false,
    href: 'https://www.youtube.com/playlist?list=PLJDwhlqmpSfNd4lw3-DNYqyU07FShIwTE',
  },
  {
    slug: 'daily-3-minute-coding',
    title: 'Daily 3 Minute Coding',
    category: 'others',
    badge: 'Shorts',
    level: 'Snackable',
    duration: '130+ shorts',
    topics: '130+ shorts',
    cover: 'img/courses/daily_3_minute_coding.webp',
    accent: 'linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)',
    tagline: '3-minute Java/Spring/code hygiene hacks for Gen Z attention spans.',
    summary: 'Tiny clips that you can binge between stand-ups to keep skills sharp.',
    description: 'Short, engaging videos that fit into your busy schedule and enhance your coding prowess.',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLJDwhlqmpSfMrTe3bSOTz6QCTpNypsA3O',
    repositoryUrl: '',
    featured: false,
    vibes: [
      'Habits'
    ],
    keyTakeaways: [],
    tableOfContent: [],
    prerequisiteCourses: [],
    optionalPrerequisiteCourses: [],
    nextSteps: [],
    resources: [],
    tags: [
      'Shorts'

    ],
    status: 'Always free',
    hasDetail: false,
    href: 'https://www.youtube.com/playlist?list=PLJDwhlqmpSfMrTe3bSOTz6QCTpNypsA3O',
  },
  {
    slug: 'software-installation',
    title: 'Software Installation',
    category: 'others',
    badge: 'Setup',
    level: 'Beginner',
    duration: '9 videos',
    topics: '9 setup guides',
    cover: 'img/courses/software_installation.webp',
    accent: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    tagline: 'Install every dev tool without the guesswork.',
    summary: 'From IDEs to databases, these walkthroughs save hours of trial-and-error.',
    description: 'Step-by-step video guides to get your development environment up and running smoothly.',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLJDwhlqmpSfPFL_TT7pl4jc33mduIPZ0V',
    repositoryUrl: '',
    featured: false,
    vibes: [
      'Setup'
    ],
    keyTakeaways: [],
    tableOfContent: [],
    prerequisiteCourses: [],
    optionalPrerequisiteCourses: [],
    nextSteps: [],
    resources: [],
    tags: [
      'Setup'
    ],
    status: 'Always free',
    hasDetail: false,
    href: 'https://www.youtube.com/playlist?list=PLJDwhlqmpSfPFL_TT7pl4jc33mduIPZ0V',
  },
];

window.AV_COURSES = AV_COURSES;
