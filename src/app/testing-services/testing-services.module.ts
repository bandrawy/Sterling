import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routes, TestingServicesRoutingModule } from './testing-services-routing.module';
import { TestingServicesComponent } from './testing-services/testing-services.component';
import { HeaderTestingServicesComponent } from './header-testing-services/header-testing-services.component';
import { TestingComponentComponent } from './testing-component.component';
import { RouterModule } from '@angular/router';
import { DynamometerTestingComponent } from './dynamometer-testing/dynamometer-testing.component';
import { CutawayEngineDisplayComponent } from './cutaway-engine-display/cutaway-engine-display.component';
import { AutomotiveFluidsTestingComponent } from './automotive-fluids-testing/automotive-fluids-testing.component';
import { BatteryTestingComponent } from './battery-testing/battery-testing.component';
import { CarbonTestingProceduresComponent } from './carbon-testing-procedures/carbon-testing-procedures.component';
import { CorrosionTestingComponent } from './corrosion-testing/corrosion-testing.component';
import { CustomTestEquipmentComponent } from './custom-test-equipment/custom-test-equipment.component';
import { CutawayEngineDisplaysComponent } from './cutaway-engine-displays/cutaway-engine-displays.component';
import { EnvironmentalTestingComponent } from './environmental-testing/environmental-testing.component';
import { EvaporativeEmissionTestingComponent } from './evaporative-emission-testing/evaporative-emission-testing.component';
import { FuelSloshTestingComponent } from './fuel-slosh-testing/fuel-slosh-testing.component';
import { FuelSystemTestingComponent } from './fuel-system-testing/fuel-system-testing.component';
import { FuelTestingComponent } from './fuel-testing/fuel-testing.component';
import { HoseTestingComponent } from './hose-testing/hose-testing.component';
import { HeliumLeakTestingComponent } from './helium-leak-testing/helium-leak-testing.component';
import { MagneticParticleInspectionComponent } from './magnetic-particle-inspection/magnetic-particle-inspection.component';
import { MaterialsTestingComponent } from './materials-testing/materials-testing.component';
import { PerformanceDurabilityReliabilityTestingComponent } from './performance-durability-reliability-testing/performance-durability-reliability-testing.component';
import { PermeationTestingComponent } from './permeation-testing/permeation-testing.component';
import { PortableFuelContainerTestingComponent } from './portable-fuel-container-testing/portable-fuel-container-testing.component';
import { PumpDurabilityTestingComponent } from './pump-durability-testing/pump-durability-testing.component';
import { TensileTestingComponent } from './tensile-testing/tensile-testing.component';
import { ThermalShockTestingComponent } from './thermal-shock-testing/thermal-shock-testing.component';
import { VehicleHoseTestingComponent } from './vehicle-hose-testing/vehicle-hose-testing.component';
import { VibrationTestingComponent } from './vibration-testing/vibration-testing.component';
import { VibrationNvhTestingComponent } from './vibration-nvh-testing/vibration-nvh-testing.component';


@NgModule({
  declarations: [
    TestingServicesComponent,
    HeaderTestingServicesComponent,
    DynamometerTestingComponent,
    CutawayEngineDisplayComponent,
    AutomotiveFluidsTestingComponent,
    BatteryTestingComponent,
    CarbonTestingProceduresComponent,
    CorrosionTestingComponent,
    CustomTestEquipmentComponent,
    CutawayEngineDisplaysComponent,
    EnvironmentalTestingComponent,
    EvaporativeEmissionTestingComponent,
    FuelSloshTestingComponent,
    FuelSystemTestingComponent,
    FuelTestingComponent,
    HoseTestingComponent,
    HeliumLeakTestingComponent,
    MagneticParticleInspectionComponent,
    MaterialsTestingComponent,
    PerformanceDurabilityReliabilityTestingComponent,
    PermeationTestingComponent,
    PortableFuelContainerTestingComponent,
    PumpDurabilityTestingComponent,
    TensileTestingComponent,
    ThermalShockTestingComponent,
    VehicleHoseTestingComponent,
    VibrationTestingComponent,
    VibrationNvhTestingComponent
  ],
  imports: [
    CommonModule,
    TestingServicesRoutingModule,
    RouterModule.forRoot(routes),
   
  ]
  })
export class TestingServicesModule { }
