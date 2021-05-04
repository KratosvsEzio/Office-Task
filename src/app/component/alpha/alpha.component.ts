import { Component, OnInit } from '@angular/core';
import { ExportAsConfig, ExportAsService, SupportedExtensions } from 'ngx-export-as';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  config: ExportAsConfig = {
    type: 'pdf',
    elementIdOrContent: 'mytable',
    options: {
      jsPDF: { unit: 'em', format: 'letter', orientation: 'portrait' },
      image: { type: 'png', quality: 1 },
      margin: 1,
      html2canvas:  { scale: 2 },
      pdfCallbackFn: this.pdfCallbackFn // to add header and footer
    }
  };

  constructor(
    private exportAsService: ExportAsService
  ) { }

  exportAsString(type: SupportedExtensions, opt?: string) {
    this.config.elementIdOrContent = '<div> test string </div>';
    this.exportAs(type, opt);
    setTimeout(() => {
      this.config.elementIdOrContent = 'mytable';
    }, 1000);
  }

  exportAs(type: SupportedExtensions, opt?: string) {
    this.config.type = type;
    if (opt) {
      this.config.options.jsPDF.orientation = opt;
    }
    this.exportAsService.save(this.config, 'myFile').subscribe(() => {
      // save started
    });
    // this.exportAsService.get(this.config).subscribe(content => {
    //   const link = document.createElement('a');
    //   const fileName = 'export.pdf';

    //   link.href = content;
    //   link.download = fileName;
    //   link.click();
    //   console.log(content);
    // });
  }

  pdfCallbackFn (pdf: any) {
    // example to add page number as footer to every page of pdf
    const noOfPages = pdf.internal.getNumberOfPages();
    for (let i = 1; i <= noOfPages; i++) {
      pdf.setPage(i);
      pdf.text('Page ' + i + ' of ' + noOfPages, pdf.internal.pageSize.getWidth() - 100, pdf.internal.pageSize.getHeight() - 30);
    }
  }


  ngOnInit(): void {
  }

}
