import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import About from "../pages/About.js";

import AirFreight from "../pages/AirFreight.js";

import ConsolidatedTransportation from "../pages/ConsolidatedTransportation.js";
import Home from "./Home";
import Contacts from "../pages/Contacts.js";

import CustomsClearance from "../pages/CustomsClearance";
import DangerousGoods from "../pages/DangerousGoods";
import FreightCalculation from "../pages/FreightCalculation";
import FreightForwarding from "../pages/FreightForwarding";
import InternationalTransportation from "../pages/InternationalTransportation";
import LogisticServices from "../pages/LogisticsServices";
import Mission from "../pages/Missions";
import MultimodalTransportation from "../pages/MultimodalTransportation";
import PressSave from "../pages/PressSave";
import RoadTransportation from "../pages/RoadTransportation";
import SeaTransportation from "../pages/SeaTransportation";
import Services from "../pages/Services";
import Standarts from "../pages/Standarts";
import UsefulLinks from "../pages/UsefulLinks";
import FormPage from "../pages/Form";

import {pageRows,pageList,pageBottom} from "../info/pageAbout";
import {pageRowsRoad,pageListRoad,pageRowsMdlRoad,pageListMdlRoad,pageBottomRoad,pageRowsInternRoadStart, ancorMailRoad} from "../info/pageRoad";

import { pageListMission, pageRowsMission } from "../info/pageMission";
import {pageRowsStandart,pageBottomStandart,ancor} from "../info/pageStandart";
import {pageRowsIntern,pageListIntern,ancorAir,pageRowsInternAir,pageRowsInternAirStart,ancorMail,ancorSea,pageRowsInternSea,
  pageListIntSea,pageRowsFinal,pageRowsInternRoad,ancorRoad,pageRowsInternMulti,ancorMulti} from "../info/pageInternationalTr";
import {imgAirFreight,pageRowsAir,pageListAir,pageBottomAir,ancorMailAir, pageInternAirStart } from "../info/pageAirFreight";
import {pageRowsSea,pageListSea,pageBottomSea,pageRowsInternSeaStart,ancorMailSea} from "../info/pageSea";
import {pageRowsMulti,pageListMulti,pageBottomMulti,ancorMailMulti,pageInternMultiStart} from "../info/pageMultimodal";
import {pageRowsConsl,pageListConsl,pageBottomConsl,ancorMailConsl,pageInternConslStart} from "../info/pageConsolidation";
import {pageRowsServices,pageServicesStart,ancorMailServices,pageBottomServices} from "../info/pageServices";
import {pageRowsCalc,pageListCalc,pageMiddleCalc,pageMiddleCalcStart,ancorMiddleCalc,pageMiddleCalcEnd,pageBottomCalc,
  pageInternCalcStart,ancorMailCalc} from "../info/pageFreightCalculation"
import {pageRowsFF,pageListFF,pageBottomFF,pageFFStart,ancorMailFF} from "../info/pageFreightForwarding";
import {pageRowsLigist,pageListLogist,pageBottomLogist,pageLogistStart,ancorMailLogist} from "../info/pageLogistic";
import {pageRowsCC,pageListCC,pageBottomCC,ancorMailCC,pageCCStart} from "../info/pageCustomsClearance";
import {pageRowsAdr,pageListAdr,titleAdr,pageRowsMiddleAdr,pageBottomAdr,pageAdrStart,ancorMailAdr} from "../info/pageAdr"



import {engPageRowsAbout,engShippingList,engPageRowsMdl,engPageListAbout,engPageBottomAbout,engAncorRateAbout,engPageRowsEnd} from "../infoEng/pageAbout";
import {engPageListMission, engPageRowsMission } from "../infoEng/pageMission";
import {engPageRowsStandart,engPageBottomStandart,engAncor} from "../infoEng/pageStandart";
import {engPageRowsIntern,engPageListIntern,engAncorAir,engPageRowsInternAir,engPageRowsInternAirStart,engAncorMail,engAncorSea,engPageRowsInternSea,
  engPageListIntSea,engPageRowsFinal,engPageRowsInternRoad,engAncorRoad,engPageRowsInternMulti,engAncorMulti} from "../infoEng/pageInternationalTr";
import {engImgAirFreight,engPageRowsAir,engPageListAir,engPageBottomAir,engAncorMailAir, engPageInternAirStart } from "../infoEng/pageAirFreight";
import {engPageRowsSea,engPageListSea,engPageBottomSea,engPageRowsInternSeaStart,engAncorMailSea} from "../infoEng/pageSea";

import {engPageRowsMulti,engPageListMulti,engPageBottomMulti,engAncorMailMulti,engPageInternMultiStart} from "../infoEng/pageMultimodal";
import {engPageRowsConsl,engPageListConsl,engPageBottomConsl,engAncorMailConsl,engPageInternConslStart} from "../infoEng/pageConsolidation";
import {engPageRowsRoad,engPageListRoad,engPageRowsMdlRoad,engPageListMdlRoad,engPageBottomRoad,engPageRowsInternRoadStart, engAncorMailRoad} from "../infoEng/pageRoad";
import {engPageRowsServices,engPageServicesStart,engAncorMailServices,engPageBottomServices} from "../infoEng/pageServices";
import {engPageRowsCalc,engPageListCalc,engPageMiddleCalc,engPageMiddleCalcStart,engAncorMiddleCalc,engPageMiddleCalcEnd,engPageBottomCalc,
  engPageInternCalcStart,engAncorMailCalc} from "../infoEng/pageFreightCalculation"
import {engPageRowsFF,engPageListFF,engPageBottomFF,engPageFFStart,engAncorMailFF} from "../infoEng/pageFreightForwarding";
import {engPageRowsLigist,engPageListLogist,engPageBottomLogist,engPageLogistStart,engAncorMailLogist} from "../infoEng/pageLogistic";
import {engPageRowsCC,engPageListCC,engPageBottomCC,engAncorMailCC,engPageCCStart} from "../infoEng/pageCustomsClearance";
import {engPageRowsAdr,engPageListAdr,engTitleAdr,engPageRowsMiddleAdr,engPageBottomAdr,engPageAdrStart,engAncorMailAdr} from "../infoEng/pageAdr"

import {NotFound} from "./NotFound";
export const useRoutes = (language) => {

console.log(language);

console.log(language);
  if (language==="RUS") {
    return (
        <Switch>
        <Route exact  path="/about" render={() => <About pageRows={pageRows} pageList={pageList} pageBottom={pageBottom}/>} />
        <Route exact  path="/get-rate" render={() => <FormPage/>} />
        <Route exact  path="/air-freight" render={()=><AirFreight imgAirFreight={imgAirFreight} ancorMail={ancorMailAir} pageRowsInternAirStart={pageInternAirStart} pageRows={pageRowsAir} pageList={pageListAir} pageBottom={pageBottomAir} />}/>
        <Route exact path="/" render={()=><Home/>} />
        <Route exact  path="/consolidated-cargo-transportation" render={()=><ConsolidatedTransportation pageRows={pageRowsConsl} pageList={pageListConsl} pageBottom={pageBottomConsl} pageInternConslStart={pageInternConslStart} ancorMail={ancorMailConsl}/>}/>
        <Route exact  path="/contacts" component={Contacts} />
        <Route exact  path="/customs-clearance" render={()=><CustomsClearance pageRows={pageRowsCC} pageList={pageListCC} pageBottom={pageBottomCC} pageInternConslStart={pageCCStart} ancorMail={ancorMailCC}/>}/>
        <Route exact  path="/transportation-of-dangerous-goods" render={()=><DangerousGoods pageRows={pageRowsAdr} pageList={pageListAdr} titleAdr={titleAdr} pageRowsMiddleAdr={pageRowsMiddleAdr} pageBottom={pageBottomAdr} pageAdrStart={pageAdrStart} ancorMail={ancorMailAdr}/>}/>
        <Route exact  path="/calculation-of-freight" render={()=><FreightCalculation pageRows={pageRowsCalc} pageList={pageListCalc} pageBottom={pageBottomCalc} pageRowsMiddle={pageMiddleCalc} pageMiddleCalcStart={pageMiddleCalcStart} ancorMiddle={ancorMiddleCalc}
         pageMiddleCalcEnd={pageMiddleCalcEnd} pageRowsCalcStart={pageInternCalcStart} ancorMail={ancorMailCalc}/>} />
        <Route exact  path="/freight-forwarding" render={()=><FreightForwarding pageRows={pageRowsFF} pageList={pageListFF} pageBottom={pageBottomFF} pageFFStart={pageFFStart} ancorMail={ancorMailFF}/>}/>
        <Route exact  path="/international-transportation" render={()=><InternationalTransportation pageRows={pageRowsIntern} pageList={pageListIntern}
         ancorAir={ancorAir} pageRowsInternAir={pageRowsInternAir} pageRowsInternAirStart={pageRowsInternAirStart} ancorMail={ancorMail} ancorSea={ancorSea}
         pageRowsInternSea={pageRowsInternSea} pageListIntSea={pageListIntSea} pageRowsFinal={pageRowsFinal} ancorRoad={ancorRoad} pageRowsInternRoad={pageRowsInternRoad}
         ancorMulti={ancorMulti} pageRowsInternMulti={pageRowsInternMulti}/>}/>
        <Route exact  path="/logistics-services" render={()=><LogisticServices pageRows={pageRowsLigist} pageList={pageListLogist} pageBottom={pageBottomLogist} pageInternLogistStart={pageLogistStart} ancorMail={ancorMailLogist}/>} />
        <Route exact  path="/multimodal-transportation" render={()=><MultimodalTransportation pageRows={pageRowsMulti} pageList={pageListMulti} pageBottom={pageBottomMulti} pageInternMultiStart={pageInternMultiStart} ancorMail={ancorMailMulti}/>} />
        <Route exact  path="/mission" render={()=><Mission pageRows={pageRowsMission} pageList={pageListMission}/>}/>
        <Route exact  path="/road-transportation" render={()=><RoadTransportation pageRows={pageRowsRoad} pageList={pageListRoad}
         pageRowsInternRoadStart={pageRowsInternRoadStart} pageRowsMdl={pageRowsMdlRoad} pageListMdl={pageListMdlRoad} ancorMail={ancorMailRoad} 
         pageBottom={pageBottomRoad}
      />}/>
        <Route exact  path="/quality-standard" render={()=><Standarts pageRows={pageRowsStandart} pageBottom={pageBottomStandart} ancor={ancor}/>} />
        <Route exact  path="/sea-container-transportation" render={()=><SeaTransportation ancorMail={ancorMailSea} pageRowsInternSeaStart={pageRowsInternSeaStart} pageRows={pageRowsSea} pageList={pageListSea} pageBottom={pageBottomSea}/>} />
        <Route exact  path="/useful-links" component={UsefulLinks} />
        <Route exact  path="/services" render={()=><Services pageRows={pageRowsServices} pageBottom={pageBottomServices} ancorMail={ancorMailServices} pageServicesStart={pageServicesStart} />}/>
      </Switch>
    );
  }if (language==="ENG"){
  return (
    <Switch>
    <Route exact  path="/about" render={() => <About pageRows={engPageRowsAbout} shippingList={engShippingList} pageRowsMdl={engPageRowsMdl}  pageList={engPageListAbout} pageBottom={engPageBottomAbout} ancorRate={engAncorRateAbout} pageRowsEnd={engPageRowsEnd}/>} />
    <Route exact  path="/get-rate" render={() => <FormPage/>} />
    <Route exact  path="/air-freight" render={()=><AirFreight imgAirFreight={engImgAirFreight} ancorMail={engAncorMailAir} pageRowsInternAirStart={engPageInternAirStart} pageRows={engPageRowsAir} pageList={engPageListAir} pageBottom={engPageBottomAir} />}/>
    <Route exact path="/" render={()=><Home/>} />
    <Route exact  path="/consolidated-cargo-transportation" render={()=><ConsolidatedTransportation pageRows={engPageRowsConsl} pageList={engPageListConsl} pageBottom={engPageBottomConsl} pageInternConslStart={engPageInternConslStart} ancorMail={engAncorMailConsl}/>}/>
    <Route exact  path="/contacts" component={Contacts} />
    <Route exact  path="/customs-clearance" render={()=><CustomsClearance pageRows={engPageRowsCC} pageList={engPageListCC} pageBottom={engPageBottomCC} pageCCStart={engPageCCStart} ancorMail={engAncorMailCC}/>}/>
    <Route exact  path="/transportation-of-dangerous-goods" render={()=><DangerousGoods pageRows={engPageRowsAdr} pageList={engPageListAdr} titleAdr={engTitleAdr} pageRowsMiddleAdr={engPageRowsMiddleAdr} pageBottom={engPageBottomAdr} pageAdrStart={engPageAdrStart} ancorMail={engAncorMailAdr}/>} />
        <Route exact  path="/calculation-of-freight" render={()=><FreightCalculation pageRows={engPageRowsCalc} pageList={engPageListCalc} pageBottom={engPageBottomCalc} pageRowsMiddle={engPageMiddleCalc} pageMiddleCalcStart={engPageMiddleCalcStart} ancorMiddle={engAncorMiddleCalc}
         pageMiddleCalcEnd={engPageMiddleCalcEnd} pageRowsCalcStart={engPageInternCalcStart} ancorMail={engAncorMailCalc}/>} />
        <Route exact  path="/freight-forwarding" render={()=><FreightForwarding pageRows={engPageRowsFF} pageList={engPageListFF} pageBottom={engPageBottomFF} pageFFStart={engPageFFStart} ancorMail={engAncorMailFF}/>} />
        <Route exact  path="/international-transportation" render={()=><InternationalTransportation pageRows={engPageRowsIntern} pageList={engPageListIntern}
         ancorAir={engAncorAir} pageRowsInternAir={engPageRowsInternAir} pageRowsInternAirStart={engPageRowsInternAirStart} ancorMail={engAncorMail} ancorSea={engAncorSea}
         pageRowsInternSea={engPageRowsInternSea} pageListIntSea={engPageListIntSea} pageRowsFinal={engPageRowsFinal} ancorRoad={engAncorRoad} pageRowsInternRoad={engPageRowsInternRoad}
         ancorMulti={engAncorMulti} pageRowsInternMulti={engPageRowsInternMulti}/>}/>
        <Route exact  path="/logistics-services"  render={()=><LogisticServices pageRows={engPageRowsLigist} pageList={engPageListLogist} pageBottom={engPageBottomLogist} pageInternLogistStart={engPageLogistStart} ancorMail={engAncorMailLogist}/>}/>
        <Route exact  path="/multimodal-transportation" render={()=><MultimodalTransportation pageRows={engPageRowsMulti} pageList={engPageListMulti} pageBottom={engPageBottomMulti} pageInternMultiStart={engPageInternMultiStart} ancorMail={engAncorMailMulti} />}/>
        <Route exact  path="/mission" render={()=><Mission pageRows={engPageRowsMission} pageList={engPageListMission}/>}/>
        <Route exact  path="/press-and-save" component={PressSave} />
        <Route exact  path="/road-transportation" render={()=><RoadTransportation pageRows={engPageRowsRoad} pageList={engPageListRoad}
         pageRowsInternRoadStart={engPageRowsInternRoadStart} pageRowsMdl={engPageRowsMdlRoad} pageListMdl={engPageListMdlRoad} ancorMail={engAncorMailRoad} 
         pageBottom={engPageBottomRoad}/>}/>
        <Route exact  path="/quality-standard" render={()=><Standarts pageRows={engPageRowsStandart} pageBottom={engPageBottomStandart} ancor={engAncor}/>} />
        <Route exact  path="/sea-container-transportation" render={()=><SeaTransportation ancorMail={engAncorMailSea} pageRowsInternSeaStart={engPageRowsInternSeaStart} pageRows={engPageRowsSea} pageList={engPageListSea} pageBottom={engPageBottomSea}/>} />
        <Route exact  path="/useful-links" component={UsefulLinks} />
        <Route exact  path="/services" render={()=><Services pageRows={engPageRowsServices} pageBottom={engPageBottomServices} ancorMail={engAncorMailServices} pageServicesStart={engPageServicesStart} />}/>
  </Switch>
  )}if(language==="DEU"){
    <Switch>
      <Redirect to="/not_found" component={NotFound}/>
    </Switch>
  }
};
