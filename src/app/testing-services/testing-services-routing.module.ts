import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutomotiveFluidsTestingComponent } from './automotive-fluids-testing/automotive-fluids-testing.component';
import { BatteryTestingComponent } from './battery-testing/battery-testing.component';
import { CarbonTestingProceduresComponent } from './carbon-testing-procedures/carbon-testing-procedures.component';
import { CorrosionTestingComponent } from './corrosion-testing/corrosion-testing.component';
import { CustomTestEquipmentComponent } from './custom-test-equipment/custom-test-equipment.component';
import { CutawayEngineDisplaysComponent } from './cutaway-engine-displays/cutaway-engine-displays.component';
import { DynamometerTestingComponent } from './dynamometer-testing/dynamometer-testing.component';
import { EnvironmentalTestingComponent } from './environmental-testing/environmental-testing.component';
import { EvaporativeEmissionTestingComponent } from './evaporative-emission-testing/evaporative-emission-testing.component';
import { FuelSloshTestingComponent } from './fuel-slosh-testing/fuel-slosh-testing.component';
import { FuelSystemTestingComponent } from './fuel-system-testing/fuel-system-testing.component';
import { FuelTestingComponent } from './fuel-testing/fuel-testing.component';
import { HeliumLeakTestingComponent } from './helium-leak-testing/helium-leak-testing.component';
import { HoseTestingComponent } from './hose-testing/hose-testing.component';
import { MagneticParticleInspectionComponent } from './magnetic-particle-inspection/magnetic-particle-inspection.component';
import { MaterialsTestingComponent } from './materials-testing/materials-testing.component';
import { PerformanceDurabilityReliabilityTestingComponent } from './performance-durability-reliability-testing/performance-durability-reliability-testing.component';
import { PermeationTestingComponent } from './permeation-testing/permeation-testing.component';
import { PortableFuelContainerTestingComponent } from './portable-fuel-container-testing/portable-fuel-container-testing.component';
import { PumpDurabilityTestingComponent } from './pump-durability-testing/pump-durability-testing.component';
import { TensileTestingComponent } from './tensile-testing/tensile-testing.component';
import { TestingServicesComponent } from './testing-services/testing-services.component';
import { ThermalShockTestingComponent } from './thermal-shock-testing/thermal-shock-testing.component';
import { VehicleHoseTestingComponent } from './vehicle-hose-testing/vehicle-hose-testing.component';
import { VibrationNvhTestingComponent } from './vibration-nvh-testing/vibration-nvh-testing.component';
import { VibrationTestingComponent } from './vibration-testing/vibration-testing.component';



export const routes: Routes = [
  { path: 'DynamometerTesting', component: DynamometerTestingComponent },
  { path: 'CutawayEngineDisplays', component: CutawayEngineDisplaysComponent },
  { path: 'AutomotiveFluidsTesting', component: AutomotiveFluidsTestingComponent },
  { path: 'BatteryTesting', component: BatteryTestingComponent },
  { path: 'CarbonTestingProcedures', component: CarbonTestingProceduresComponent },
  { path: 'CorrosionTesting', component: CorrosionTestingComponent },
  { path: 'CustomTestEquipment', component: CustomTestEquipmentComponent },
  { path: 'EnvironmentalTesting', component: EnvironmentalTestingComponent },
  { path: 'EvaporativeEmissionTesting', component: EvaporativeEmissionTestingComponent },
  { path: 'FuelSloshTesting', component: FuelSloshTestingComponent },
  { path: 'HoseTesting', component: HoseTestingComponent },
  { path: 'HeliumLeakTesting', component: HeliumLeakTestingComponent },
  { path: 'MagneticParticleInspection', component: MagneticParticleInspectionComponent },
  { path: 'MaterialsTesting', component: MaterialsTestingComponent },
  { path: 'PerformanceDurabilityReliabilityTesting', component: PerformanceDurabilityReliabilityTestingComponent },
  { path: 'PermeationTesting', component: PermeationTestingComponent },
  { path: 'PortableFuelContainerTesting', component: PortableFuelContainerTestingComponent },
  { path: 'PumpDurabilityTesting', component: PumpDurabilityTestingComponent },
  { path: 'TensileTesting', component: TensileTestingComponent },
  { path: 'ThermalShockTesting', component: ThermalShockTestingComponent },
  { path: 'VehicleHoseTesting', component: VehicleHoseTestingComponent },
  { path: 'VibrationTesting', component: VibrationTestingComponent },
  { path: 'VibrationNVHTesting', component: VibrationNvhTestingComponent },
  { path: 'fuelSystemTesting', component: FuelSystemTestingComponent },
  { path: 'fuelTesting', component: FuelTestingComponent },
  { path: 'Testingservices', component: TestingServicesComponent },
  { path: '', redirectTo: 'Testingservices', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestingServicesRoutingModule { }
