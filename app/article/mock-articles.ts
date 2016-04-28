import {Article} from './article';

export var ARTICLES: Article[] = [
    {
        id: 7,
        author: "Alex Gregor",
        title: "Thinking in Angular JS",
        content: `
        <p>
        Angular computes updates based on changes to data, not DOM, for fast updates that scale to the largest data sets
        with minimal memory overhead.
        </p>

        <p>
        With Angular Universal for server-side rendering and Web Workers for smooth scrolling and transitions, Angular 2
        solves the core challenges in mobile web performance.
        </p>

        <p>
        Supports several languages including plain JavaScript, TypeScript, and Dart.
        Also supports both object-style data structure with POJO data-binding and functional reactive style with unidirectional data flow
        and support for observables and immutable data structures.
        </p>
        `,
        publishDate: new Date(Date.parse('2016-04-27T21:00:00.000Z')),
        commentsCount: 1
    },
    {
        id: 6,
        author: "Martin Freeman",
        title: "Java EE 8 is coming",
        content: `
        <p>
        Java Platform, Enterprise Edition or Java EE is a widely used enterprise computing platform developed under the Java Community Process.
        The platform provides an API and runtime environment for developing and running enterprise software, including network and web services,
        and other large-scale, multi-tiered, scalable, reliable, and secure network applications. Java EE extends the Java Platform, Standard Edition
        (Java SE), providing an API for object-relational mapping, distributed and multi-tier architectures, and web services.
        The platform incorporates a design based largely on modular components running on an application server.
        Software for Java EE is primarily developed in the Java programming language. The platform emphasizes convention over configuration and annotations for configuration.
        Optionally XML can be used to override annotations or to deviate from the platform defaults.
        </p>

        <p>
        The work for Java EE 8 started late ’14/early ’15 and several specs released an EDR, but the work slowed down significantly since October 2015.
        Some specs officially announced they are on halt. Java EE 8 was expected around H1 2017 but the current hiatus may make this challenging.
        </p>
        `,
        publishDate: new Date(Date.parse('2016-04-27T15:00:00.000Z')),
        commentsCount: 3
    },
    {
        id: 5,
        author: "Bjarne Stroustrup",
        title: "C++ in 20 minutes",
        content: `
        <h1>:D</h1>
        `,
        publishDate: new Date(Date.parse('2016-03-20T12:34:00.000Z')),
        commentsCount: 1548
    },
    {
        id: 4,
        author: "Judd Vinet",
        title: "Arch Linux",
        content: `
        <p>
            Arch Linux is an independently developed, i686/x86-64 general-purpose GNU/Linux distribution that strives to
            provide the latest stable versions of most software by following a rolling-release model.
            The default installation is a minimal base system, configured by the user to only add what is required for his purposes.
        </p>

        <h3>Simplicity</h3>
        <p>
            Arch Linux defines simplicity as without unnecessary additions or modifications. It ships software as released by
            the original developers (upstream) with minimal distribution-specific (downstream) changes: patches not accepted by
            upstream are avoided, and Arch's downstream patches consist almost entirely of backported bug fixes that are obsoleted by
            the project's next release.
        </p>
        <p>
            In a similar fashion, Arch ships the configuration files provided by upstream with changes limited to distribution-specific
            issues like adjusting the system file paths. It does not add automation features such as enabling a service simply because
            the package was installed. Packages are only split when compelling advantages exist, such as to save disk space in particularly
            bad cases of waste. GUI configuration utilities are not officially provided, encouraging to perform most system configuration from
            the shell and a text editor.
        </p>

        <h3>Modernity</h3>
        <p>
            Arch Linux strives to maintain the latest stable release versions of its software as long as systemic package
            breakage can be reasonably avoided. It is based on a rolling-release system, which allows a one-time installation with continuous upgrades.
        </p>
        <p>
            Arch incorporates many of the newer features available to GNU/Linux users, including the systemd init system,
            modern file systems (Ext2/3/4, Reiser, XFS, JFS, BTRFS), LVM2, software RAID, udev support and initcpio (with mkinitcpio),
            as well as the latest available kernels.
        </p>

        <h3>Pragmatism</h3>
        <p>
            Arch is a pragmatic distribution rather than an ideological one. The principles here are only useful guidelines.
            Ultimately, design decisions are made on a case-by-case basis through developer consensus.
            Evidence-based technical analysis and debate are what matter, not politics or popular opinion.
        </p>
        <p>
            The large number of packages and build scripts in the various Arch Linux repositories offer free and open source
            software for those who prefer it, as well as proprietary software packages for those who embrace functionality over ideology.
        </p>
        `,
        publishDate: new Date(Date.parse('2015-12-31T23:59:00.000Z')),
        commentsCount: 4
    },
    {
        id: 3,
        author: "Peter Parker",
        title: "Making large applications with jQuery",
        content: `
        <p>
            Don't do that. Don't do that. Don't do that. Don't do that. Don't do that. Don't do that. Don't do that. Don't do that.
            Don't do that. Don't do that. Don't do that. Don't do that. Don't do that. Don't do that. Don't do that. Don't do that.
            Don't do that. Don't do that. Don't do that. Don't do that. Don't do that. Don't do that. Don't do that. Don't do that.
            Don't do that. Don't do that. Don't do that. Don't do that. Don't do that. Don't do that. Don't do that. Don't do that.
            Don't do that. Don't do that. Don't do that. Don't do that. Don't do that. Don't do that. Don't do that. Don't do that.
        </p>
        <p>
            Please:(
        </p>
        `,
        publishDate: new Date(Date.parse('2015-11-16T14:34:00.000Z')),
        commentsCount: 0
    },
    {
        id: 2,
        author: "Martin Freeman",
        title: "Java vs C#",
        content: `
        <p>
            Coming soon
        </p>
        `,
        publishDate: new Date(Date.parse('2015-10-23T12:40:00.000Z')),
        commentsCount: 1
    },
    {
        id: 1,
        author: "Paul Helex",
        title: "Java Interview",
        content: `
        <p>
            What do you know about Java?
        </p>
        <p>
            What are the supported platforms by Java Programming Language?
        </p>
        <p>
            List any five features of Java?
        </p>
        <p>
            Why is Java Architectural Neutral?
        </p>
        <p>
            How Java enabled High Performance?
        </p>
        <p>
            Why Java is considered dynamic?
        </p>
        <p>
            What is Java Virtual Machine and how it is considered in context of Java’s platform independent feature?
        </p>
        <p>
            List two Java IDE’s?
        </p>
        <p>
            List some Java keywords(unlike C, C++ keywords)?
        </p>
        <p>
            What do you mean by Object?
        </p>
        <p>
            Define class?
        </p>
        <p>
            What kind of variables a class can consist of?
        </p>
        <p>
            What is a Local Variable?
        </p>
        <p>
            What is a Instance Variable?
        </p>
        <p>
            What is a Class Variable?
        </p>
        <p>
            What is Singleton class?
        </p>
        <p>
            What do you mean by Constructor?
        </p>
        `,
        publishDate: new Date(Date.parse('2014-12-01T12:40:00.000Z')),
        commentsCount: 1
    }

];