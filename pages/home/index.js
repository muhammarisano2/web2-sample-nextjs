import MyLayout from "../../components/layout/MyLayout";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    localStorage.setItem("token", "test");
  }, []);
  return (
    <MyLayout title="home - tokoku">
      <div>Home</div>
      <img src="/assets/dummy2.jpg" alt="img1" />

      <hr />
      <Image
        className={styles.myImg}
        src="/assets/dummy3.jpg"
        width={"100%"}
        height={"100%"}
        alt="img3"
      />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ipsum in,
        consequatur facere neque cumque voluptatum maiores placeat ex labore
        dolores explicabo cupiditate corrupti provident inventore consequuntur
        beatae, quisquam soluta, laboriosam eligendi impedit quasi excepturi
        doloribus. Omnis sint similique cum eligendi quasi, aut facere, fuga
        unde assumenda illum, dicta eaque? Veritatis facilis deleniti suscipit
        quidem, architecto illum laboriosam, eius ad quod voluptates, blanditiis
        mollitia reiciendis at ipsum perferendis culpa facere aspernatur. Nobis,
        repellendus deleniti! Tempora modi officiis sed officia ea obcaecati
        consectetur nulla autem! Fugiat provident dolore ex unde repellendus
        quas, sapiente molestias nostrum eligendi? Nam ut voluptates
        necessitatibus esse, aliquam quidem tenetur, eaque mollitia dolores vel
        velit ex aut, soluta reiciendis sunt natus. Odit veniam amet quos cumque
        similique! Fugiat sunt ipsum asperiores animi esse non, sit nemo odit,
        labore et vitae? Quia reiciendis rem, eligendi illum adipisci
        dignissimos nihil veritatis provident vitae earum natus quos suscipit
        deleniti consequatur ratione dolorem fuga facilis! Laudantium
        perspiciatis maxime delectus quaerat, voluptas magni sunt ab sequi
        excepturi cum reprehenderit neque doloribus consequatur aliquid,
        aspernatur laborum quod tenetur, quos ut quibusdam. Nesciunt iusto in
        possimus esse ab illo maxime veritatis rem inventore. Tempora corrupti
        molestiae minima tenetur perspiciatis quaerat impedit a nemo asperiores
        aperiam voluptatem ratione iste quibusdam modi autem, totam atque
        delectus dolore laboriosam deleniti harum itaque. Quidem nulla officiis
        facere consequatur impedit repellat nam ad recusandae, magnam adipisci
        architecto neque molestias rem modi suscipit at asperiores eos, tenetur
        vel in non? Optio at numquam minus mollitia. Beatae quidem quas
        praesentium totam debitis neque, consectetur fugiat, aperiam animi quam
        ab amet aspernatur corrupti tenetur illo voluptatibus tempore unde
        aliquid accusantium corporis laborum rerum laboriosam? Adipisci illum,
        itaque consectetur eveniet ipsa commodi perspiciatis praesentium?
        Commodi repellat facere amet, fuga deserunt similique reprehenderit
        exercitationem dignissimos quidem quod eligendi obcaecati numquam
        dolorum maxime debitis temporibus adipisci tenetur. Incidunt aliquid
        officia fugit mollitia sunt ad excepturi quibusdam. Quasi pariatur
        mollitia eius dolore. Eos pariatur deleniti ad excepturi reiciendis qui
        suscipit distinctio, minima asperiores ab autem quisquam cumque amet
        maxime voluptatibus dolorum. Sapiente inventore obcaecati aspernatur
        reprehenderit sunt vero similique vel voluptatum molestias praesentium,
        provident ullam perspiciatis fuga nobis debitis esse molestiae a, enim
        accusantium eaque! Ab est assumenda minima quaerat rem, ad quod, magni
        porro rerum reprehenderit eveniet et libero dolorum culpa, similique hic
        quas odit excepturi dolor dolore ullam officia! Odit doloribus modi
        dicta commodi hic quia cum quas voluptatum quam molestiae, quibusdam
        neque animi consequatur? Iure a ratione fuga. Repellendus, a? Vitae
        blanditiis eius nihil molestiae fugit voluptas quas enim commodi itaque
        reiciendis deleniti totam, eveniet vero repudiandae? Laboriosam impedit
        odio, asperiores reiciendis quod, nemo nam ut architecto quam atque
        cupiditate non ex officiis nisi hic dolorum tempora aut doloribus facere
        unde enim? Officiis aut est voluptate illo, dolorum explicabo ad qui
        nostrum recusandae magnam natus incidunt aperiam repellat, et
        perspiciatis possimus dolores esse tenetur temporibus aspernatur sint
        soluta, iure doloremque rerum? At mollitia minima veniam libero odit
        explicabo necessitatibus similique delectus cupiditate, iste, deleniti,
        incidunt ullam dolores! Ducimus laudantium molestias, ratione culpa
        veniam nisi eaque vero earum commodi in repellat labore amet ipsum
        vitae. Mollitia quidem obcaecati fuga! Doloremque molestiae sunt
        voluptatum quas, natus iusto rerum dolorum esse omnis quos. Placeat hic
        in neque voluptatem. Quisquam amet, excepturi aspernatur assumenda
        soluta pariatur quod vitae reiciendis. Libero ipsa animi, similique
        ipsam non fugiat voluptas exercitationem esse soluta, dolor aliquid. Sit
        ut natus non, consequuntur unde tempore eius rem quas at nostrum cumque
        ea sed corrupti. Nam dignissimos recusandae magnam tempora
        exercitationem numquam placeat deserunt repudiandae consequuntur
        suscipit. Omnis quos distinctio expedita id magni sunt animi optio
        aliquam eaque numquam mollitia neque quasi explicabo, vel in quae
        voluptatem aspernatur! Omnis, esse error nam minima saepe dolor nihil
        natus distinctio pariatur sapiente expedita impedit! Optio quia hic
        ratione eveniet architecto delectus fugit nihil, placeat odit
        consectetur, excepturi ut quos autem. Quasi quis aspernatur quod eius
        molestiae fugiat magni excepturi necessitatibus, blanditiis voluptas
        quia aliquid, voluptates autem inventore labore! Incidunt id voluptates
        quod vitae odit veniam ducimus numquam unde officia laboriosam sit
        assumenda harum molestiae eius aliquam, itaque eveniet cum voluptatem
        tenetur minima! Totam aperiam praesentium, repellat unde commodi numquam
        sunt facere reiciendis expedita atque facilis obcaecati deleniti quaerat
        perferendis aut aliquid corrupti cupiditate amet. Et rerum a omnis
        aperiam animi doloremque iure eos maxime, eveniet earum excepturi
        nostrum sit sapiente officiis quidem nihil voluptas aspernatur odio
        labore veniam. In qui aliquam cumque assumenda atque quisquam voluptatem
        eligendi porro laudantium fugiat! Quae, autem tempora! Nobis voluptatum
        natus minus minima aliquam illo adipisci ea ipsam blanditiis eius
        ducimus ex quis cupiditate, nisi perferendis est at placeat. Vero
        corrupti, fuga totam ipsa itaque adipisci architecto consequatur tempora
        sit quibusdam reiciendis necessitatibus omnis ex sapiente modi nostrum
        accusamus accusantium deserunt error repudiandae saepe, excepturi
        facere. Temporibus, dignissimos omnis. Possimus dolorem labore rerum ab
        maxime. Iste, magnam eos. Blanditiis asperiores quae dolores ullam
        magnam ut eaque aspernatur soluta id consequatur, adipisci ab officia
        incidunt optio molestiae voluptate quibusdam harum excepturi qui. Labore
        aspernatur aliquid doloremque soluta quos. Voluptatibus voluptates
        tenetur rem, odio unde atque dignissimos fugiat commodi et deleniti
        debitis doloribus sapiente explicabo illum id accusantium assumenda
        nostrum doloremque laborum! Minus impedit ut, quaerat quia obcaecati
        quod provident quis nemo quisquam totam labore voluptates, dolorum,
        magni sunt voluptatum minima error ab dolor quos eveniet at similique
        placeat sed. Reprehenderit atque commodi ullam excepturi quidem expedita
        mollitia quas, est, animi dignissimos quae voluptates praesentium minus
        at molestias vero sit porro totam amet. Sed autem veniam animi
        voluptate, at dolore repellat fuga sunt rerum, itaque doloribus mollitia
        dignissimos exercitationem quaerat sint in sapiente harum voluptatum.
        Numquam, expedita placeat quas laudantium, autem quam minus ducimus
        explicabo, assumenda eum obcaecati a facere! Velit officiis perspiciatis
        aliquid similique corrupti sit voluptatem voluptatibus distinctio ipsa,
        expedita quaerat ullam suscipit voluptate amet atque dolor quod quasi id
        magnam quam laboriosam ab voluptas sint consectetur! Labore debitis
        porro laudantium minima nihil explicabo, aliquam, itaque error facilis
        nostrum deserunt, at cumque quos voluptates quia quo ea quam qui
        laboriosam. Eum quasi a impedit, minus ipsa reiciendis? Ex facere id
        ullam.
      </p>
      <Image src="/assets/dummy4.jpg" width={300} height={200} alt="img4" />
      <p>value env : {process.env.TITLE_APP}</p>
    </MyLayout>
  );
};

export default Home;
