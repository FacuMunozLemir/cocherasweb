// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPNuDUFreX11GZuLZm7h5JxCzdOmZ5Xes",
  authDomain: "micochera-58631.firebaseapp.com",
  projectId: "micochera-58631",
  storageBucket: "micochera-58631.appspot.com",
  messagingSenderId: "1005581205581",
  appId: "1:1005581205581:web:315b134dd9e423f7641c04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

//Cargamos los vehículos por hora
export async function createNewHourVehicle(vehicleData) {
  const collectionRef = collection(firestore, "porhora");
  let response = await addDoc(collectionRef, vehicleData);
  return response.id;
}

//Traemos los vehículos que aún no salieron
export async function getItems() {
  const miColeccion = collection(firestore, "porhora");
  let snapshotDB = await getDocs(miColeccion);

  let dataDocs = snapshotDB.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });
  return dataDocs;
}

//Eliminar vehiculo
export async function deleteItems(id) {
  const docRef = doc(firestore, "porhora", id);

  deleteDoc(docRef).then(() => {
    window.location.reload();
  });
}

//Traemos vehículos con patente coincidente
export async function getItemsByDomain(pat) {
  const miColeccion = collection(firestore, "porhora");
  let snapshotDB = await getDocs(miColeccion);

  let dataDocs = snapshotDB.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });

  let dataDocs2 = [];
  let string;
  let prodId;
  let bool;
  let prodIdIndex;

  dataDocs.forEach((element) => {
    prodId = dataDocs2.find((el) => el.id == element["id"]);
    prodIdIndex = dataDocs.indexOf(element);
    string = element["patente"];
    bool = string.includes(pat);

    if (bool == true) {
      if (prodId != undefined) {
        dataDocs2[prodIdIndex] = element;
      } else {
        dataDocs2.push(element);
      }
    }
  });

  return dataDocs2;
}

export default firestore;
