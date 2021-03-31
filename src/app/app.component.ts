import { Component } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Quiz';
  questionData: Question[] = [];

  constructor() {
    this.questionData = [
      {
        questionId: '4278e38b-3e5f-491e-95f0-eb6f81045131',
        questionText:
          'Ad aliquip aute labore pariatur eu dolor cillum esse nisi commodo ad elit.',
        options: [
          {
            optionId: '9d52ca3f-f2fd-4c81-ba60-a26951afb6c1',
            optionText: 'in',
          },
          {
            optionId: 'accb3e42-65d5-435f-a593-a799f1db16d4',
            optionText: 'excepteur',
          },
          {
            optionId: '1a164ee8-d926-4867-a2b3-121a76de5b19',
            optionText: 'officia',
          },
          {
            optionId: '5bb97d73-8ab4-4c07-a6fa-68645137fffa',
            optionText: 'sunt',
          },
        ],
      },
      {
        questionId: 'a6f95728-8adf-4579-a21c-32408f0d19d9',
        questionText:
          'Voluptate labore ad deserunt enim voluptate adipisicing.',
        options: [
          {
            optionId: 'b492d865-5d45-4d22-afcc-82c7a8cc3e1f',
            optionText: 'aliqua',
          },
          {
            optionId: '2a6eaa91-a7fa-447b-bdd8-cc33fbd828a1',
            optionText: 'cillum',
          },
          {
            optionId: '58baa932-841c-4753-aaaa-4d335eac6c92',
            optionText: 'irure',
          },
          {
            optionId: '9edb4e9e-6121-4059-97ed-bf7efec81b00',
            optionText: 'ipsum',
          },
        ],
      },
      {
        questionId: 'f1bca690-0497-4ed8-a095-25c7f9680b7a',
        questionText:
          'Consectetur do qui officia cupidatat non proident magna dolore aliqua.',
        options: [
          {
            optionId: 'b2213161-778c-4057-9e58-093e46cf7ded',
            optionText: 'exercitation',
          },
          {
            optionId: '866c4b7f-d04e-4865-814a-39ab59ed5811',
            optionText: 'in',
          },
          {
            optionId: 'ffec8b48-08b4-468b-81c5-3fcb29dcafa4',
            optionText: 'nisi',
          },
          {
            optionId: '3bb2480d-8ffe-4bec-8199-74fccdc06778',
            optionText: 'dolor',
          },
        ],
      },
      {
        questionId: '4b97d991-9a3d-4dbb-b16c-f4c7e1cf6c01',
        questionText: 'In qui qui consectetur et.',
        options: [
          {
            optionId: 'aeeffaf7-30e2-4ece-a2b3-0ae9dfd847b8',
            optionText: 'proident',
          },
          {
            optionId: 'ef7c08e5-2ab4-4dd0-ad9c-6bbf4595a488',
            optionText: 'ut',
          },
          {
            optionId: '03e53c55-9b91-4604-84a5-ab1680b778e9',
            optionText: 'laborum',
          },
          {
            optionId: '98186cae-cd4c-4f28-85e0-1b64c7aec758',
            optionText: 'sunt',
          },
        ],
      },
      {
        questionId: '4ee1f6e4-4f40-4a29-b9ad-dc84ffcd5fce',
        questionText: 'Duis enim qui minim ea esse.',
        options: [
          {
            optionId: '7a8ed59c-9f6b-4d41-80a0-82db91f1dd3d',
            optionText: 'aute',
          },
          {
            optionId: '55c89ea1-1954-4076-bda0-19bb3617c939',
            optionText: 'elit',
          },
          {
            optionId: 'faf3f653-f287-4ebe-8855-132584d287df',
            optionText: 'non',
          },
          {
            optionId: '1118d3b4-1e4f-4c31-bc7a-cc2515d8fd0b',
            optionText: 'velit',
          },
        ],
      },
      {
        questionId: '6b04d8e3-3a6d-4c20-b1ea-184f99c394ee',
        questionText:
          'Lorem eu aliqua proident occaecat ipsum laborum officia dolor laboris excepteur.',
        options: [
          {
            optionId: '5ac04f76-cf1d-4955-9ffb-92d0f5a2e95c',
            optionText: 'nisi',
          },
          {
            optionId: '5d688e2a-8a80-4794-83dd-373268eb8e10',
            optionText: 'occaecat',
          },
          {
            optionId: '373f53ea-a669-43c9-a896-b4d5160f4822',
            optionText: 'officia',
          },
          {
            optionId: '782572f7-9cbc-4a55-b34a-06a0f9ab065e',
            optionText: 'eiusmod',
          },
        ],
      },
      {
        questionId: '1ba436c2-fb14-4693-bd20-c07ab8a6f5e1',
        questionText:
          'Tempor deserunt et deserunt officia est id et est commodo velit deserunt ut.',
        options: [
          {
            optionId: '156d112a-b544-4c0f-9f0c-ca9d8ed2b6d2',
            optionText: 'Lorem',
          },
          {
            optionId: '0bea36fa-4d2d-40ee-9ad5-39a4193a768e',
            optionText: 'id',
          },
          {
            optionId: 'a990c8a8-0661-4dd8-9386-0bf548255d7f',
            optionText: 'duis',
          },
          {
            optionId: 'f4250b88-554d-47b6-9eb8-0b5e670eb63c',
            optionText: 'mollit',
          },
        ],
      },
      {
        questionId: 'cbf1b6d5-33f4-48a9-b498-7e27adb3c8de',
        questionText:
          'Anim et non sit dolore minim nisi occaecat ipsum officia dolore velit occaecat est.',
        options: [
          {
            optionId: '309149e0-af65-476c-93ae-679f1c58fa18',
            optionText: 'cupidatat',
          },
          {
            optionId: 'a83d3e67-bede-4072-b5bc-ff5493ecd877',
            optionText: 'id',
          },
          {
            optionId: 'e3d00f08-9d12-4913-b3cb-22f3a8bd2c2f',
            optionText: 'dolor',
          },
          {
            optionId: '30db466d-0240-4acc-8cef-3a0e975ef56d',
            optionText: 'ut',
          },
        ],
      },
      {
        questionId: '3302684d-8546-4340-9e07-32159720fe2f',
        questionText: 'Consequat ullamco ut aliqua veniam laboris.',
        options: [
          {
            optionId: '0579a412-5282-4f85-b54d-b1276996b967',
            optionText: 'Lorem',
          },
          {
            optionId: '72a91e9e-7d0f-455a-b57b-a0d367eefe55',
            optionText: 'non',
          },
          {
            optionId: '9ed93037-1b97-4bdf-b82a-46fa37a1a112',
            optionText: 'aliqua',
          },
          {
            optionId: 'a2b24f46-ca2a-467a-b8ee-b353f11dfe51',
            optionText: 'laborum',
          },
        ],
      },
      {
        questionId: 'eca3521a-b7ed-449f-9519-d3f378203649',
        questionText: 'Do dolor ullamco irure minim.',
        options: [
          {
            optionId: 'e188296a-d9ad-4025-9e99-5cd157fcc919',
            optionText: 'do',
          },
          {
            optionId: 'd4f9adb3-10de-48c6-8dc0-3c33f5d5a658',
            optionText: 'cupidatat',
          },
          {
            optionId: 'f3f91845-69bd-4009-9af1-d3f832a179af',
            optionText: 'mollit',
          },
          {
            optionId: '8a88191e-9d4e-42ae-8af4-b9833b2e9342',
            optionText: 'qui',
          },
        ],
      },
      {
        questionId: '846331c6-8b8a-4928-806a-2abede8ac1a2',
        questionText:
          'Laborum nostrud eu non esse sunt enim ad culpa eu dolore sit.',
        options: [
          {
            optionId: '2d4e54c9-362a-4fed-9182-217dd432ae72',
            optionText: 'minim',
          },
          {
            optionId: '15964224-575b-4c37-be37-468b86656760',
            optionText: 'dolore',
          },
          {
            optionId: '767fd227-4cba-4b46-acf3-0108fe8ceac1',
            optionText: 'nulla',
          },
          {
            optionId: 'eef9e792-5d51-4169-a80d-c93c3d150bdd',
            optionText: 'nulla',
          },
        ],
      },
      {
        questionId: '02e19a2d-5207-402e-bb85-fb1bd60bbb18',
        questionText: 'Nisi in Lorem dolore ut ex reprehenderit deserunt sint.',
        options: [
          {
            optionId: '9cf1e890-a245-4887-9e59-9aba9dcdb524',
            optionText: 'aliquip',
          },
          {
            optionId: 'a643e79d-cddb-4052-b274-ae45540fb3d9',
            optionText: 'veniam',
          },
          {
            optionId: '6cc5b882-36d5-47aa-90b1-9c08647681b2',
            optionText: 'laboris',
          },
          {
            optionId: '39f9af2f-5f43-4957-bbd3-8cd4002edc8b',
            optionText: 'esse',
          },
        ],
      },
      {
        questionId: '5ff4d18d-869f-4741-ac39-5ff09ba5989c',
        questionText: 'Id elit tempor nostrud nisi et elit est.',
        options: [
          {
            optionId: 'a9509384-8361-482a-a06d-8ffae177fb2f',
            optionText: 'do',
          },
          {
            optionId: '012cef7f-2bd4-40e8-95de-136b27b98e4c',
            optionText: 'ut',
          },
          {
            optionId: '4b81e7e4-44db-444a-a1de-1c69ba252937',
            optionText: 'minim',
          },
          {
            optionId: 'd457199f-28e0-4636-a283-995e55ee3dea',
            optionText: 'est',
          },
        ],
      },
      {
        questionId: '1f703920-330c-4799-b1b7-207543f7ccac',
        questionText: 'Aliquip eiusmod ad ullamco sint Lorem pariatur est do.',
        options: [
          {
            optionId: 'f88bdc2a-ef92-4f0c-9269-f333abf539d5',
            optionText: 'voluptate',
          },
          {
            optionId: '3611ef67-a922-4dc5-b86f-81d3bbb432a6',
            optionText: 'velit',
          },
          {
            optionId: '358a2e2a-029b-4dbf-a8a7-37eb4c3e950f',
            optionText: 'qui',
          },
          {
            optionId: '088bffac-4295-4c54-9959-ac6d56f694f3',
            optionText: 'magna',
          },
        ],
      },
      {
        questionId: 'f8120196-653b-4f1c-85cb-e87e9a1e40bc',
        questionText:
          'Nostrud dolore culpa enim consequat dolore sint consequat.',
        options: [
          {
            optionId: '5f6d1def-4ff9-47b6-afe7-8b7b6bcc61aa',
            optionText: 'ea',
          },
          {
            optionId: '8cf09132-93ca-4de6-9a6b-72cda8ef6165',
            optionText: 'est',
          },
          {
            optionId: '236d3bec-7065-448a-8692-8f8e4318555f',
            optionText: 'deserunt',
          },
          {
            optionId: '0cbc6a7f-2455-490c-a5e7-622c87242157',
            optionText: 'dolor',
          },
        ],
      },
      {
        questionId: '3f7a8073-e1d8-46c6-ad3b-403958fb0bc9',
        questionText: 'Aliquip commodo esse cillum fugiat velit.',
        options: [
          {
            optionId: 'aa6725ea-1843-4c49-8bd9-24deac22ccbe',
            optionText: 'magna',
          },
          {
            optionId: '320690fc-4970-4d65-a992-655c90572f35',
            optionText: 'incididunt',
          },
          {
            optionId: '41865ccb-20ab-4916-b53f-cc7cd8633cea',
            optionText: 'nulla',
          },
          {
            optionId: 'fcd4155f-2f33-4e1b-b4aa-0e18b34b3e32',
            optionText: 'aliquip',
          },
        ],
      },
      {
        questionId: 'b57ccbce-244f-45a5-a605-10f73771696b',
        questionText:
          'Proident culpa reprehenderit voluptate consectetur veniam elit labore aute aliquip.',
        options: [
          {
            optionId: 'c7dba2cd-dfb6-4834-aebf-a4f48c645df4',
            optionText: 'nostrud',
          },
          {
            optionId: '2b813896-dfdd-442e-86d1-f4c61e1f0bd0',
            optionText: 'eiusmod',
          },
          {
            optionId: 'ce275057-9110-4e20-b84b-5a1741c155fc',
            optionText: 'amet',
          },
          {
            optionId: '4f810b68-b8ce-458b-a926-ffeb37d90c5c',
            optionText: 'dolor',
          },
        ],
      },
      {
        questionId: '0de8e6ac-683d-4d8b-8df9-20b992c56d6f',
        questionText:
          'Aliqua veniam ex eiusmod mollit ipsum ipsum duis eiusmod.',
        options: [
          {
            optionId: '9f5457e1-4c47-4c8e-bf15-fceff4a5e526',
            optionText: 'sint',
          },
          {
            optionId: 'c3ef4fa9-31cc-4379-8eba-447db09aad55',
            optionText: 'ad',
          },
          {
            optionId: '929ef1e6-9d2d-49cb-ab92-b08620ab0408',
            optionText: 'pariatur',
          },
          {
            optionId: 'bee7cc4e-e926-48f1-9665-cb8bd875035d',
            optionText: 'mollit',
          },
        ],
      },
      {
        questionId: 'c0e23e57-3433-4032-a671-2d73b0055467',
        questionText:
          'Est ad labore magna culpa aute nulla ex tempor dolor sit eu fugiat magna ipsum.',
        options: [
          {
            optionId: '56bc2f22-e6fe-4692-9a52-4591c9459bac',
            optionText: 'occaecat',
          },
          {
            optionId: '1cdbca71-8f92-4c78-8fa0-af1ba12959a1',
            optionText: 'laborum',
          },
          {
            optionId: '758df2c8-b1e0-4a49-8dd4-ceeca6b46f2c',
            optionText: 'labore',
          },
          {
            optionId: '6385958b-2a1e-44d9-9bd6-b9cb41d55168',
            optionText: 'sunt',
          },
        ],
      },
      {
        questionId: '7956c411-d8f0-4bf9-9162-bb364747a28d',
        questionText:
          'Adipisicing aliqua dolore laboris duis in exercitation et.',
        options: [
          {
            optionId: '1eacef38-a9f0-4255-9e1a-569be090e788',
            optionText: 'nisi',
          },
          {
            optionId: 'c1217087-1635-47ac-80e8-8321282a6393',
            optionText: 'magna',
          },
          {
            optionId: '89408216-4f39-442c-9ab1-2b8c2bd9859b',
            optionText: 'nostrud',
          },
          {
            optionId: '45176fd6-944c-470c-a402-373bad56d387',
            optionText: 'dolor',
          },
        ],
      },
    ];
  }

  show(answers) {
    console.log(answers);
  }
}
