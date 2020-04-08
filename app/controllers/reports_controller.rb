class ReportsController < ApplicationController
    
    before_action :find_report, except: [:index, :new, :create]

    def destroy
        @report.destroy
        redirect_to  reports_path
    end

    def edit 
    end

    def update
    @report.update(report_params)
    redirect_to reports_path
    end

    def show
        @comments = @report.comments
        
    end

    def index
        @reports = Report.all
    end

    def new
        @report = Report.new
    end

    def create
        @report = Report.new(report_params)
        @report.user = current_user

        if @report.save
        redirect_to @report
        else
            render 'new'
        end
    end





    private
        def report_params
            params.require(:report).permit(:title,:description)
        end

        def find_report
            @report = Report.find(params[:id])
        end
    
end
